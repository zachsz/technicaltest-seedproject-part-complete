class ViewDeals {
  constructor(store, template) {
    this.store = store;
    this.template = template;
    this.dealList = document.getElementById("deal-list");
  }

  render(data) {
    if (this.dealList) {
      if (data.length) {
        const htmlToAppend = this.template.buildDealList(data);
        this.dealList.innerHTML = htmlToAppend;
      } else {
        this.dealList.innerHTML = `<li><h3>Sorry, we couldn't find any deals matching your criteria.</h3></li>`;
      }
    }
  }

  update(state) {
    this.render(this.store.deals)
  }
}

export default ViewDeals;
