import { ChatServiceClientFactory } from "./chat-service-client";

describe("ChatServiceClient", () => {
  test("grpc client", (done) => {
    const chatService = ChatServiceClientFactory.create();
    const stream = chatService.chatStream({
      chat_id: "e4d9b900-9357-4228-a064-cc05d0f786ca",
      user_id: "1",
      message: "Hello World",
    });
    stream.on('end', () => {
      done();
    })
  }, 20000);
});