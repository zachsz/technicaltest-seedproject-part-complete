import Store from "../Store";
import mockData from "../../../public/db.json";

describe("filter", () => {
  let sut;

  beforeEach(function () {
    sut = new Store();
    sut.setDeals(mockData.deals);
  });

  it("should return all deals when no filters applied", () => {
    expect(sut.deals).toEqual(mockData.deals);
  });

  describe("product filters", () => {
    it("should return 4 broadband only deals when broadband filter is applied", () => {
      sut.setProductFilter("broadband");

      expect(sut.deals.length).toEqual(4);
      expect(sut.deals).toEqual([
        {
          "id": 6158,
          "title": "Unlimited Broadband",
          "provider": {
            "id": 116,
            "name": "Origin Broadband"
          },
          "cost": {
            "upfrontCost": 0.00,
            "totalContractCost": 233.88
          },
          "productTypes": ["Broadband", "Phone"],
          "contractLength": 12
        },
        {
          "id": 4359,
          "title": "Unlimited Broadband & Unlimited UK & Mobile Calls",
          "provider": {
            "id": 42,
            "name": "Plusnet"
          },
          "cost": {
            "upfrontCost": 10.00,
            "totalContractCost": 383.87
          },
          "productTypes": ["Broadband", "Phone"],
          "contractLength": 18
        },
        {
          "id": 4371,
          "title": "Unlimited Fibre Extra",
          "provider": {
            "id": 42,
            "name": "Plusnet"
          },
          "cost": {
            "upfrontCost": 25.00,
            "totalContractCost": 564.82
          },
          "productTypes": ["Phone", "Fibre Broadband"],
          "contractLength": 18
        },
        {
          "id": 5459,
          "title": "Unlimited Fibre Extra & Evening & Weekend UK & Mobile Calls",
          "provider": {
            "id": 42,
            "name": "Plusnet"
          },
          "cost": {
            "upfrontCost": 25.00,
            "totalContractCost": 636.82
          },
          "productTypes": ["Phone", "Broadband"],
          "contractLength": 18
        }
      ]);
    });

    it("should return an empty array when only mobile filter is applied", () => {
      sut.setProductFilter("mobile");

      expect(sut.deals.length).toEqual(0);
    });

    it("should return an empty array when only tv filter is applied", () => {
      sut.setProductFilter("tv");

      expect(sut.deals.length).toEqual(0);
    });

    it("should return one broadband and mobile deal when broadband and mobile filters are applied", () => {
      sut.setProductFilter("broadband");
      sut.setProductFilter("mobile");

      expect(sut.deals.length).toEqual(1);
      expect(sut.deals).toEqual([
        {
          "id": 4276,
          "title": "Unlimited Broadband + Weekend Calls + BT Mobile",
          "provider": {
            "id": 3,
            "name": "BT"
          },
          "cost": {
            "upfrontCost": 9.99,
            "totalContractCost": 393.87
          },
          "productTypes": ["Broadband", "Phone", "Mobile"],
          "contractLength": 12
        }
      ]);
    })

    it("should return 4 broadband and tv deals when broadband and tv filters are applied", () => {
      sut.setProductFilter("broadband");
      sut.setProductFilter("tv");

      expect(sut.deals.length).toEqual(4);
      expect(sut.deals).toEqual([
        {
          "id": 6074,
          "title": "Starter + Unlimited Infinity 1 + Weekend Calls",
          "provider": {
            "id": 3,
            "name": "BT"
          },
          "cost": {
            "upfrontCost": 34.99,
            "totalContractCost": 436.87
          },
          "productTypes": ["TV", "Phone", "Fibre Broadband"],
          "contractLength": 12
        },
        {
          "id": 5738,
          "title": "Starter + Unlimited Broadband + Weekend Calls",
          "provider": {
            "id": 3,
            "name": "BT"
          },
          "cost": {
            "upfrontCost": 59.99,
            "totalContractCost": 383.87
          },
          "productTypes": ["TV", "Broadband", "Phone"],
          "contractLength": 12
        },
        {
          "id": 6165,
          "title": "TV & Superfast Fibre & Weekend Calls",
          "provider": {
            "id": 48,
            "name": "EE"
          },
          "cost": {
            "upfrontCost": 32.00,
            "totalContractCost": 689.00
          },
          "productTypes": ["TV", "Phone", "Fibre Broadband"],
          "contractLength": 18
        },
        {
          "id": 6468,
          "title": "Sports Bundle 2 Packs + Broadband Unlimited",
          "provider": {
            "id": 1,
            "name": "Sky"
          },
          "cost": {
            "upfrontCost": 39.95,
            "totalContractCost": 1263.77
          },
          "productTypes": ["TV", "Broadband", "Phone"],
          "contractLength": 18
        }
      ]);
    });

    it("should return an empty array when mobile and tv filters are applied", () => {
      sut.setProductFilter("mobile");
      sut.setProductFilter("tv");

      expect(sut.deals.length).toEqual(0);
    });

    it("should return 2 deals when broadband, mobile and tv filters are applied", () => {
      sut.setProductFilter("broadband");
      sut.setProductFilter("mobile");
      sut.setProductFilter("tv");

      expect(sut.deals.length).toEqual(2);
      expect(sut.deals).toEqual([
        {
          "id": 4529,
          "title": "Unlimited BT Infinity 1 & Weekend Calls + BT Mobile + BT Sport Pack",
          "provider": {
            "id": 3,
            "name": "BT"
          },
          "cost": {
            "upfrontCost": 34.99,
            "totalContractCost": 577.87
          },
          "productTypes": ["Phone", "Fibre Broadband", "Mobile", "TV"],
          "contractLength": 12
        },
        {
          "id": 4530,
          "title": "Unlimited BT Infinity 2 + Weekend Calls + BT Mobile + BT Sport Pack",
          "provider": {
            "id": 3,
            "name": "BT"
          },
          "cost": {
            "upfrontCost": 34.99,
            "totalContractCost": 817.87
          },
          "productTypes": ["Phone", "Broadband", "Mobile", "TV"],
          "contractLength": 12
        }
      ]);
    });
  });

  describe("provider filters", () => {
    it("should return 5 BT deals when BT filter is applied", () => {
      sut.setProviderFilter(3);

      expect(sut.deals.length).toEqual(5);
      expect(sut.deals).toEqual([
        {
          "id": 6074,
          "title": "Starter + Unlimited Infinity 1 + Weekend Calls",
          "provider": {
            "id": 3,
            "name": "BT"
          },
          "cost": {
            "upfrontCost": 34.99,
            "totalContractCost": 436.87
          },
          "productTypes": ["TV", "Phone", "Fibre Broadband"],
          "contractLength": 12
        },
        {
          "id": 5738,
          "title": "Starter + Unlimited Broadband + Weekend Calls",
          "provider": {
            "id": 3,
            "name": "BT"
          },
          "cost": {
            "upfrontCost": 59.99,
            "totalContractCost": 383.87
          },
          "productTypes": ["TV", "Broadband", "Phone"],
          "contractLength": 12
        },
        {
          "id": 4529,
          "title": "Unlimited BT Infinity 1 & Weekend Calls + BT Mobile + BT Sport Pack",
          "provider": {
            "id": 3,
            "name": "BT"
          },
          "cost": {
            "upfrontCost": 34.99,
            "totalContractCost": 577.87
          },
          "productTypes": ["Phone", "Fibre Broadband", "Mobile", "TV"],
          "contractLength": 12
        },
        {
          "id": 4530,
          "title": "Unlimited BT Infinity 2 + Weekend Calls + BT Mobile + BT Sport Pack",
          "provider": {
            "id": 3,
            "name": "BT"
          },
          "cost": {
            "upfrontCost": 34.99,
            "totalContractCost": 817.87
          },
          "productTypes": ["Phone", "Broadband", "Mobile", "TV"],
          "contractLength": 12
        },
        {
          "id": 4276,
          "title": "Unlimited Broadband + Weekend Calls + BT Mobile",
          "provider": {
            "id": 3,
            "name": "BT"
          },
          "cost": {
            "upfrontCost": 9.99,
            "totalContractCost": 393.87
          },
          "productTypes": ["Broadband", "Phone", "Mobile"],
          "contractLength": 12
        }
      ]);
    });
    it("should return 3 Plusnet deals when Plusnet filter is applied", () => {
      sut.setProviderFilter(42);

      expect(sut.deals.length).toEqual(3);
      expect(sut.deals).toEqual([
        {
          "id": 4359,
          "title": "Unlimited Broadband & Unlimited UK & Mobile Calls",
          "provider": {
            "id": 42,
            "name": "Plusnet"
          },
          "cost": {
            "upfrontCost": 10.00,
            "totalContractCost": 383.87
          },
          "productTypes": ["Broadband", "Phone"],
          "contractLength": 18
        },
        {
          "id": 4371,
          "title": "Unlimited Fibre Extra",
          "provider": {
            "id": 42,
            "name": "Plusnet"
          },
          "cost": {
            "upfrontCost": 25.00,
            "totalContractCost": 564.82
          },
          "productTypes": ["Phone", "Fibre Broadband"],
          "contractLength": 18
        },
        {
          "id": 5459,
          "title": "Unlimited Fibre Extra & Evening & Weekend UK & Mobile Calls",
          "provider": {
            "id": 42,
            "name": "Plusnet"
          },
          "cost": {
            "upfrontCost": 25.00,
            "totalContractCost": 636.82
          },
          "productTypes": ["Phone", "Broadband"],
          "contractLength": 18
        }
      ]);
    });
    it("should return 1 Origin Broadband deal when Origin Broadband filter is applied", () => {
      sut.setProviderFilter(116);

      expect(sut.deals.length).toEqual(1);
      expect(sut.deals).toEqual([
        {
          "id": 6158,
          "title": "Unlimited Broadband",
          "provider": {
            "id": 116,
            "name": "Origin Broadband"
          },
          "cost": {
            "upfrontCost": 0.00,
            "totalContractCost": 233.88
          },
          "productTypes": ["Broadband", "Phone"],
          "contractLength": 12
        }
      ]);
    });
    it("should return 1 EE deal when EE filter is applied", () => {
      sut.setProviderFilter(48);

      expect(sut.deals.length).toEqual(1);
      expect(sut.deals).toEqual([
        {
          "id": 6165,
          "title": "TV & Superfast Fibre & Weekend Calls",
          "provider": {
            "id": 48,
            "name": "EE"
          },
          "cost": {
            "upfrontCost": 32.00,
            "totalContractCost": 689.00
          },
          "productTypes": ["TV", "Phone", "Fibre Broadband"],
          "contractLength": 18
        }
      ]);
    });
    it("should return 1 Sky deal when Sky filter is applied", () => {
      sut.setProviderFilter(1);

      expect(sut.deals.length).toEqual(1);
      expect(sut.deals).toEqual([
        {
          "id": 6468,
          "title": "Sports Bundle 2 Packs + Broadband Unlimited",
          "provider": {
            "id": 1,
            "name": "Sky"
          },
          "cost": {
            "upfrontCost": 39.95,
            "totalContractCost": 1263.77
          },
          "productTypes": ["TV", "Broadband", "Phone"],
          "contractLength": 18
        }
      ]);
    });
  });

  describe("product + provider filters", () => {
    describe("BT", () => {
      it("should return an empty array when broadband + BT filters are applied", () => {
        sut.setProductFilter("broadband");
        sut.setProviderFilter(3);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return an empty array when mobile + BT filters are applied", () => {
        sut.setProductFilter("mobile");
        sut.setProviderFilter(3);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return an empty array when tv + BT filters are applied", () => {
        sut.setProductFilter("tv");
        sut.setProviderFilter(3);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return 1 broadband and mobile deal when broadband, mobile + BT filters are applied", () => {
        sut.setProductFilter("broadband");
        sut.setProductFilter("mobile");
        sut.setProviderFilter(3);
  
        expect(sut.deals.length).toEqual(1);
        expect(sut.deals).toEqual([
          {
            "id": 4276,
            "title": "Unlimited Broadband + Weekend Calls + BT Mobile",
            "provider": {
              "id": 3,
              "name": "BT"
            },
            "cost": {
              "upfrontCost": 9.99,
              "totalContractCost": 393.87
            },
            "productTypes": ["Broadband", "Phone", "Mobile"],
            "contractLength": 12
          }
        ]);
      });
  
      it("should return 2 deals when broadband, tv + BT filters are applied", () => {
        sut.setProductFilter("broadband");
        sut.setProductFilter("tv");
        sut.setProviderFilter(3);
  
        expect(sut.deals.length).toEqual(2);
        expect(sut.deals).toEqual([
          {
            "id": 6074,
            "title": "Starter + Unlimited Infinity 1 + Weekend Calls",
            "provider": {
              "id": 3,
              "name": "BT"
            },
            "cost": {
              "upfrontCost": 34.99,
              "totalContractCost": 436.87
            },
            "productTypes": ["TV", "Phone", "Fibre Broadband"],
            "contractLength": 12
          },
          {
            "id": 5738,
            "title": "Starter + Unlimited Broadband + Weekend Calls",
            "provider": {
              "id": 3,
              "name": "BT"
            },
            "cost": {
              "upfrontCost": 59.99,
              "totalContractCost": 383.87
            },
            "productTypes": ["TV", "Broadband", "Phone"],
            "contractLength": 12
          }
        ]);
      });
  
      it("should return an empty array when mobile, tv + BT filters are applied", () => {
        sut.setProductFilter("mobile");
        sut.setProductFilter("tv");
        sut.setProviderFilter(3);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return 2 deals when broadband, mobile, tv + BT filters are applied", () => {
        sut.setProductFilter("broadband");
        sut.setProductFilter("mobile");
        sut.setProductFilter("tv");
        sut.setProviderFilter(3);
  
        expect(sut.deals.length).toEqual(2);
        expect(sut.deals).toEqual([
          {
            "id": 4529,
            "title": "Unlimited BT Infinity 1 & Weekend Calls + BT Mobile + BT Sport Pack",
            "provider": {
              "id": 3,
              "name": "BT"
            },
            "cost": {
              "upfrontCost": 34.99,
              "totalContractCost": 577.87
            },
            "productTypes": ["Phone", "Fibre Broadband", "Mobile", "TV"],
            "contractLength": 12
          },
          {
            "id": 4530,
            "title": "Unlimited BT Infinity 2 + Weekend Calls + BT Mobile + BT Sport Pack",
            "provider": {
              "id": 3,
              "name": "BT"
            },
            "cost": {
              "upfrontCost": 34.99,
              "totalContractCost": 817.87
            },
            "productTypes": ["Phone", "Broadband", "Mobile", "TV"],
            "contractLength": 12
          }
        ]);
      });
    });

    describe("Plusnet", () => {
      it("should return 3 deals when broadband + Plusnet are applied", () => {
        sut.setProductFilter("broadband");
        sut.setProviderFilter(42);
  
        expect(sut.deals.length).toEqual(3);
        expect(sut.deals).toEqual([
          {
            "id": 4359,
            "title": "Unlimited Broadband & Unlimited UK & Mobile Calls",
            "provider": {
              "id": 42,
              "name": "Plusnet"
            },
            "cost": {
              "upfrontCost": 10.00,
              "totalContractCost": 383.87
            },
            "productTypes": ["Broadband", "Phone"],
            "contractLength": 18
          },
          {
            "id": 4371,
            "title": "Unlimited Fibre Extra",
            "provider": {
              "id": 42,
              "name": "Plusnet"
            },
            "cost": {
              "upfrontCost": 25.00,
              "totalContractCost": 564.82
            },
            "productTypes": ["Phone", "Fibre Broadband"],
            "contractLength": 18
          },
          {
            "id": 5459,
            "title": "Unlimited Fibre Extra & Evening & Weekend UK & Mobile Calls",
            "provider": {
              "id": 42,
              "name": "Plusnet"
            },
            "cost": {
              "upfrontCost": 25.00,
              "totalContractCost": 636.82
            },
            "productTypes": ["Phone", "Broadband"],
            "contractLength": 18
          }
        ])
      });
  
      it("should return an empty array when mobile + Plusnet are applied", () => {
        sut.setProductFilter("mobile");
        sut.setProviderFilter(42);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return an empty array when tv + Plusnet are applied", () => {
        sut.setProductFilter("tv");
        sut.setProviderFilter(42);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return an empty array when broadband, mobile + Plusnet are applied", () => {
        sut.setProductFilter("broadband");
        sut.setProductFilter("mobile");
        sut.setProviderFilter(42);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return an empty array when broadband, tv + Plusnet are applied", () => {
        sut.setProductFilter("broadband");
        sut.setProductFilter("tv");
        sut.setProviderFilter(42);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return an empty array when mobile, tv + Plusnet are applied", () => {
        sut.setProductFilter("mobile");
        sut.setProductFilter("tv");
        sut.setProviderFilter(42);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return an empty array when broadband, mobile, tv + Plusnet are applied", () => {
        sut.setProductFilter("broadband");
        sut.setProductFilter("mobile");
        sut.setProductFilter("tv");
        sut.setProviderFilter(42);
  
        expect(sut.deals.length).toEqual(0);
      });
    });

    describe("Origin Broadband", () => {
      it("should return 1 deal when broadband + Origin Broadband are applied", () => {
        sut.setProductFilter("broadband");
        sut.setProviderFilter(116);
  
        expect(sut.deals.length).toEqual(1);
        expect(sut.deals).toEqual([
          {
            "id": 6158,
            "title": "Unlimited Broadband",
            "provider": {
              "id": 116,
              "name": "Origin Broadband"
            },
            "cost": {
              "upfrontCost": 0.00,
              "totalContractCost": 233.88
            },
            "productTypes": ["Broadband", "Phone"],
            "contractLength": 12
          }
        ]);
      });
  
      it("should return an empty array when mobile + Origin Broadband are applied", () => {
        sut.setProductFilter("mobile");
        sut.setProviderFilter(116);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return an empty array when tv + Origin Broadband are applied", () => {
        sut.setProductFilter("tv");
        sut.setProviderFilter(116);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return an empty array when broadband, mobile + Origin Broadband are applied", () => {
        sut.setProductFilter("broadband");
        sut.setProductFilter("mobile");
        sut.setProviderFilter(116);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return an empty array when broadband, tv + Origin Broadband are applied", () => {
        sut.setProductFilter("broadband");
        sut.setProductFilter("tv");
        sut.setProviderFilter(116);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return an empty array when mobile, tv + Origin Broadband are applied", () => {
        sut.setProductFilter("mobile");
        sut.setProductFilter("tv");
        sut.setProviderFilter(116);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return an empty array when broadband, mobile, tv + Origin Broadband are applied", () => {
        sut.setProductFilter("broadband");
        sut.setProductFilter("mobile");
        sut.setProductFilter("tv");
        sut.setProviderFilter(116);
  
        expect(sut.deals.length).toEqual(0);
      });
    });

    describe("EE", () => {
      it("should return an empty array when broadband + EE are applied", () => {
        sut.setProductFilter("broadband");
        sut.setProviderFilter(48);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return an empty array when mobile + EE are applied", () => {
        sut.setProductFilter("mobile");
        sut.setProviderFilter(48);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return an empty array when tv + EE are applied", () => {
        sut.setProductFilter("tv");
        sut.setProviderFilter(48);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return an empty array when broadband, mobile + EE are applied", () => {
        sut.setProductFilter("broadband");
        sut.setProductFilter("mobile");
        sut.setProviderFilter(48);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return 1 deal when broadband, tv + EE are applied", () => {
        sut.setProductFilter("broadband");
        sut.setProductFilter("tv");
        sut.setProviderFilter(48);
  
        expect(sut.deals.length).toEqual(1);
        expect(sut.deals).toEqual([
          {
            "id": 6165,
            "title": "TV & Superfast Fibre & Weekend Calls",
            "provider": {
              "id": 48,
              "name": "EE"
            },
            "cost": {
              "upfrontCost": 32.00,
              "totalContractCost": 689.00
            },
            "productTypes": ["TV", "Phone", "Fibre Broadband"],
            "contractLength": 18
          }
        ]);
      });
  
      it("should return an empty array when mobile, tv + EE are applied", () => {
        sut.setProductFilter("mobile");
        sut.setProductFilter("tv");
        sut.setProviderFilter(48);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return an empty array when broadband, mobile, tv + EE are applied", () => {
        sut.setProductFilter("broadband");
        sut.setProductFilter("mobile");
        sut.setProductFilter("tv");
        sut.setProviderFilter(48);
  
        expect(sut.deals.length).toEqual(0);
      });
    });

    describe("Sky", () => {
      it("should return an empty array when broadband + Sky are applied", () => {
        sut.setProductFilter("broadband");
        sut.setProviderFilter(1);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return an empty array when mobile + Sky are applied", () => {
        sut.setProductFilter("mobile");
        sut.setProviderFilter(1);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return an empty array when tv + Sky are applied", () => {
        sut.setProductFilter("tv");
        sut.setProviderFilter(1);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return an empty array when broadband, mobile + Sky are applied", () => {
        sut.setProductFilter("broadband");
        sut.setProductFilter("mobile");
        sut.setProviderFilter(1);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return 1 deal when broadband, tv + Sky are applied", () => {
        sut.setProductFilter("broadband");
        sut.setProductFilter("tv");
        sut.setProviderFilter(1);
  
        expect(sut.deals.length).toEqual(1);
        expect(sut.deals).toEqual([
          {
            "id": 6468,
            "title": "Sports Bundle 2 Packs + Broadband Unlimited",
            "provider": {
              "id": 1,
              "name": "Sky"
            },
            "cost": {
              "upfrontCost": 39.95,
              "totalContractCost": 1263.77
            },
            "productTypes": ["TV", "Broadband", "Phone"],
            "contractLength": 18
          }
        ]);
      });
  
      it("should return an empty array when mobile, tv + Sky are applied", () => {
        sut.setProductFilter("mobile");
        sut.setProductFilter("tv");
        sut.setProviderFilter(1);
  
        expect(sut.deals.length).toEqual(0);
      });
  
      it("should return an empty array when broadband, mobile, tv + Sky are applied", () => {
        sut.setProductFilter("broadband");
        sut.setProductFilter("mobile");
        sut.setProductFilter("tv");
        sut.setProviderFilter(1);
  
        expect(sut.deals.length).toEqual(0);
      });
    });
  });
});
