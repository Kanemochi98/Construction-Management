interface FetcherOptions extends RequestInit {
    baseUrl?: string;
    headers?: Record<string, string>; //acces key:value, Allow overriding headers
  }
  
  async function fetcher<T>(url: string, options: FetcherOptions = {}): Promise<T> {
    const baseUrl = options.baseUrl || process.env.NEXT_PUBLIC_API_ENDPOINT || ''; // Use provided, env, or default
  
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers, // Merge provided headers
    };
    console.log(`header: ${headers}` );
    const fetchOptions: RequestInit = {
      ...options,
      headers,
    };
    console.log(`fetchOpti: ${headers}`);
    try {
      const response = await fetch(`${baseUrl}${url}`, fetchOptions);
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }
  
      const data: T = await response.json();
      return data;
    } catch (error) {
      console.error('Fetcher error:', error);
      throw error; // Re-throw for component-level handling
    }
  }
  
  export default fetcher;