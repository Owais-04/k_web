export async function fetchStatus() {
  try {
    const response = await fetch('http://localhost:5000/api/status');
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
}

export async function fetchDestinations() {
  try {
    const response = await fetch('http://localhost:5000/api/destinations');
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
} 