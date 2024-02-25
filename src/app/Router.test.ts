import { expect } from "chai";
import { describe, it } from "mocha";
import * as sinon from "sinon";
import { router } from "./Router.ts";

describe("Router", () => {
  const fakeContent = sinon.fake.returns(document.createElement("div"));

  const mockBlock = class {
    getContent = fakeContent;
  } as any;

  it("use() возвращает экземпляр класса Router", () => {
    const result = router.use("/", mockBlock);
    expect(result).to.eq(router);
  });

  it("go() выполняет переход на указанную страницу ", () => {
    router.start();
    router.go("/profile");
    expect(window.location.pathname).to.equal("/profile");
  });
});
