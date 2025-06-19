# import requests

# response = requests.get("https://www.youtube.com")
# print("YT Response::", response)

# response = requests.get("https://catfish.ninja/fact")
# print(response.status_code)

# data = response.json()
# print("Cat Fact:", data['fact']) 

import requests

# List of 5 different API URLs
api_urls = [
    "https://catfact.ninja/fact",
    "https://api.coindesk.com/v1/bpi/currentprice.json",
    "https://dog.ceo/api/breeds/image/random",  # Fixed typo here
    "https://api.chucknorris.io/jokes/random",
    "https://official-joke-api.appspot.com/jokes/random"
]

for i, url in enumerate(api_urls, start=1):
    print(f"\nCalling API #{i}: {url}")
    try:
        response = requests.get(url, timeout=10)
        print("Status Code:", response.status_code)

        if response.status_code == 200:
            try:
                data = response.json()
                print("Response Data (Snippet):", str(data)[:150] + "...")
            except ValueError:
                print("Received non-JSON response.")
        else:
            print("Failed to retrieve data.")

    except requests.exceptions.RequestException as e:
        print("An error occurred while making the request:", e)