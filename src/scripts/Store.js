import Observable from "./Observable";

class Store extends Observable {
  constructor() {
    super();
    this.state = {
      deals: [],
      productFilters: [],
      providerFilter: null
    };
  }

  get deals() {
    return this.filter();
  }

  filter() {
    if (this.state.productFilters.length) {
      return this.state.deals.filter(deal => {
        const types = deal.productTypes
          .filter(type => type !== 'Phone')
          .map(type => {
            if (type.toLowerCase().indexOf('broadband') > -1) {
              return 'broadband';
            }
            return type.toLowerCase();
          })
          .sort()
          .join(',');

        return types === this.state.productFilters.join(',');
      });
    }
    return this.state.deals;
  }

  setDeals(data) {
    this.state.deals = data;
    this.notify(this.state);
  }

  setProductFilter(value) {
    const filter = value.trim().toLowerCase();
    const index = this.state.productFilters.indexOf(filter);
    if (index === -1) {
      this.state.productFilters.push(filter);
    } else {
      this.state.productFilters.splice(index, 1);
    }
    this.state.productFilters.sort();
    this.notify(this.state);
  }

  setProviderFilter(value = null) {
    this.state.providerFilter = value;
    this.notify(this.state);
  }
}

export default Store;
