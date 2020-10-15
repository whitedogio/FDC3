// prettier-ignore
// This file is auto-generated, do not edit. Make changes to the *.schema.json files and run `yarn typegen`.

export enum ContextTypes {
  Contact = "fdc3.contact",
  ContactList = "fdc3.contactList",
  Country = "fdc3.country",
  Instrument = "fdc3.instrument",
  Organization = "fdc3.organization",
  Portfolio = "fdc3.portfolio",
  Position = "fdc3.position"
}

export type ContextType = ContextTypes | string;

export type Contact = Context & {
  type: ContextType;
  id: {
    email?: string;
    FDS_ID?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
};

export type ContactList = Context & {
  type: ContextType;
  contacts: Contact[];
  [k: string]: unknown;
};

export interface Context {
  type: ContextType;
  name?: string;
  id?: {
    [k: string]: string;
  };
  [k: string]: unknown;
}

export type Country = Context & {
  type: ContextType;
  id: {
    ISOALPHA2?: string;
    ISOALPHA3?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
};

export type Instrument = Context & {
  type: ContextType;
  id: {
    BBG?: string;
    CUSIP?: string;
    FDS_ID?: string;
    FIGI?: string;
    ISIN?: string;
    PERMID?: string;
    RIC?: string;
    SEDOL?: string;
    ticker?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
};

export type InstrumentList = Context & {
  type: ContextType;
  instruments: Instrument[];
  [k: string]: unknown;
};

export type Organization = Context & {
  type: ContextType;
  id: {
    LEI?: string;
    PERMID?: string;
    FDS_ID?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
};

export type Portfolio = Context & {
  type: ContextType;
  positions: Position[];
  [k: string]: unknown;
};

export type Position = Context & {
  type: ContextType;
  instrument: Instrument;
  holding: number;
  [k: string]: unknown;
};
