# Vyper smart contract example
contract SimpleContract:
    message: String[public]

    def __init__(initialMessage: String[public]):
        self.message = initialMessage

    def updateMessage(newMessage: String[public]):
        self.message = newMessage
