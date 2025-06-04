from langchain_ollama import ChatOllama

ollama_url = "http://127.0.0.1:11434"
#model_name = "phi3.5"
model_name = "deepseek-r1"

chat = ChatOllama(model=model_name, base_url=ollama_url)

response = chat.invoke("Quien fue el primer presidente de Estados Unidos?")
print(type(response))
print(response.content)
