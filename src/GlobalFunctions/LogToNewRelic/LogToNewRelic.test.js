import logToNewRelic from "../LogToNewRelic";

console.error = message => {
  throw new Error(message);
};

describe("LogToNewRelic", () => {
  beforeEach(() => {
    global.newrelic = {
      addPageAction: jest.fn()
    };
  });

  it("Should log test message", () => {
    logToNewRelic("testLogMessage");
    expect(global.newrelic.addPageAction).toHaveBeenCalledWith(
      "testLogMessage"
    );
  });
});
