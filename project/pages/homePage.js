const BasePage = require("./basePage");

class HomePage extends BasePage {
  get cookiePopupCloseButton() {
    return cy.get(".js-cookie-popup-close", { timeout: 10000 });
  }

  get catalogOpener() {
    return cy.get('.js-mm-opener');
  }

  get smartphonesButton() {
    return cy.get(".swiper-slide-next > .nav-item");
  }

  get productBoxLink() {
    return cy.get(":nth-child(14) > .item-box > .item-box-link");
  }

  get productControlButton() {
    return cy.get(
      ":nth-child(1) > :nth-child(1) > .card-product-full > :nth-child(3) > .c-controls > .btn",
    );
  }

  get cartLink() {
    return cy.get('[href="/cart"]');
  }

  get sectionProductBody() {
    return cy.get(".section-product-body");
  }

  get deleteButton() {
    return cy.get(":nth-child(2) > .c-controls-btn > span");
  }

  get subscribeButton() {
    return cy.get(".f-subscribe__form > .btn");
  }

  get subscribeField() {
    return cy.get(".f-subscribe__form > input");
  }

  get subscriptionAgreement() {
    return cy.get("form > .inp-box > .inp-box__label > .inp-box__view");
  }
  get subscriptionResultText() {
    return cy.get(
      '[style=""] > .modal-popup > .modal-popup__head > .modal-popup-subheading',
    );
  }

  get smartphonesCategory() {
    return cy.get('li[data-trig="drop-1"] > a.catalog-navigation-trig');
  }

  get tvCategory() {
    return cy.get('li[data-trig="drop-2"] > a.catalog-navigation-trig');
  }

  get pcCategory() {
    return cy.get('[data-trig="drop-3"] > .catalog-navigation-trig');
  }

  get kitchenCategory() {
    return cy.get('li[data-trig="drop-4"] > a.catalog-navigation-trig');
  }

  get homeCategory() {
    return cy.get('li[data-trig="drop-5"] > a.catalog-navigation-trig');
  }

  get renovationCategory() {
    return cy.get('li[data-trig="drop-6"] > a.catalog-navigation-trig');
  }

  get audioCategory() {
    return cy.get('li[data-trig="drop-7"] > a.catalog-navigation-trig');
  }

  get beautyCategory() {
    return cy.get('li[data-trig="drop-8"] > a.catalog-navigation-trig');
  }

  get gameCategory() {
    return cy.get('li[data-trig="drop-9"] > a.catalog-navigation-trig');
  }

  get sportCategory() {
    return cy.get('li[data-trig="drop-10"] > a.catalog-navigation-trig');
  }

  get camerasCategory() {
    return cy.get('li[data-trig="drop-11"] > a.catalog-navigation-trig');
  }

  get autoCategory() {
    return cy.get('li[data-trig="drop-12"] > a.catalog-navigation-trig');
  }

  get youtobeButton() {
    return cy.get(".ic-soc-yt");
  }

  get instagramButton() {
    return cy.get(".ic-soc-inst");
  }

  get facebookButton() {
    return cy.get(".ic-soc-fb");
  }

  get vkontakteButton() {
    return cy.get(".f-social__list > .ic-soc-vk");
  }

  get telegramButton() {
    return cy.get(".ic-soc-tg");
  }

  get odnoklasnikiButton() {
    return cy.get(".ic-soc-ok");
  }

  visitHomePage(url) {
    cy.visit(url);
    this.cookiePopupCloseButton.should("be.visible").click();
  }

  findPhonesStraightFromHome() {
    this.smartphonesButton.click();
  }

  addProductToCart() {
    this.productBoxLink.click();
    this.productControlButton.click();
  }

  removeProductFromCart() {
    this.deleteButton.click();
  }

  goToCart() {
    this.cartLink.click();
  }

  getCartBody() {
    return this.sectionProductBody
  }

  subscribeViaEmailAndCheckTheSubscriptionStatus(emailLogin) {
    this.subscribeButton.scrollIntoView();
    this.subscriptionAgreement.click();
    this.subscribeField.type(`${emailLogin}@lmao.rofl`);
    this.subscribeButton.click();
    this.subscriptionResultText.should(
      "have.text",
      "Ваша подписка успешно создана",
    );
  }

  getProductPrice() {
    return cy
      .get(
        ":nth-child(1) > :nth-child(1) > .card-product-full > :nth-child(3) > .c-cost > .c-price",
      )
      .invoke("text")
      .then((priceText) => {
        return parseFloat(priceText.replace(/[^\d.-]/g, ""));
      });
  }

  openFromCatalog(categoryIndex) {
    this.catalogOpener.click();
    if (categoryIndex === "smartphones") {
      this.smartphonesCategory.click();
    } else if (categoryIndex === "TV") {
      this.tvCategory.click();
    } else if (categoryIndex === "PC") {
      this.pcCategory.focus().click();
    } else if (categoryIndex === "kitchen") {
      this.kitchenCategory.focus().click();
    } else if (categoryIndex === "home") {
      this.homeCategory.click();
    } else if (categoryIndex === "renovation") {
      this.renovationCategory.click();
    } else if (categoryIndex === "audio") {
      this.audioCategory.click();
    } else if (categoryIndex === "beauty") {
      this.beautyCategory.click();
    } else if (categoryIndex === "game") {
      this.gameCategory.click();
    } else if (categoryIndex === "sport") {
      this.sportCategory.click();
    } else if (categoryIndex === "cameras") {
      this.camerasCategory.click();
    } else if (categoryIndex === "auto") {
      this.autoCategory.click();
    }
  }

  goToSocialMedia(socialMedia) {
    this.youtobeButton.scrollIntoView();
    if (socialMedia === "yt") {
      this.youtobeButton.click();
    } else if (socialMedia === "ig") {
      this.instagramButton.click();
    } else if (socialMedia === "fb") {
      this.facebookButton.click();
    } else if (socialMedia === "vk") {
      this.vkontakteButton.click();
    } else if (socialMedia === "tg") {
      this.telegramButton.click();
    } else if (socialMedia === "ok") {
      this.odnoklasnikiButton.click();
    }
  }
}

module.exports = new HomePage();
