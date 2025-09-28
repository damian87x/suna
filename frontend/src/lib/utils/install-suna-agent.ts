"use server";

async function installAdenticForNewUser(userId: string) {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const adminApiKey = process.env.ADENTIC_ADMIN_API_KEY;
    
    if (!adminApiKey) {
      console.error('ADENTIC_ADMIN_API_KEY not configured - cannot install Adentic agent');
      return;
    }
  
    const response = await fetch(`${backendUrl}/admin/adentic-agents/install-user/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Admin-Api-Key': adminApiKey,
      },
    });

    console.log('response', response);

    if (response.ok) {
      const result = await response.json();
      return true;
    } else {
      const errorData = await response.json().catch(() => ({}));
      console.error(`Failed to install Adentic agent for user:`, errorData);
      return false;
    }
  } catch (error) {
    console.error('Error installing Adentic agent for new user:', error);
    return false;
  }
}

export async function checkAndInstallAdenticAgent(userId: string, userCreatedAt: string) {
  const userCreatedDate = new Date(userCreatedAt);
  const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
  
  if (userCreatedDate > tenMinutesAgo) {
    const installKey = `adentic-install-attempted-${userId}`;
    if (typeof window !== 'undefined' && localStorage.getItem(installKey)) {
      return;
    }
    
    const success = await installAdenticForNewUser(userId);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem(installKey, Date.now().toString());
    }
    
    return success;
  }
  
  return false;
} 