import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text;
  };
}

export interface SharedPropertyCharacteristics extends Struct.ComponentSchema {
  collectionName: 'components_shared_property_characteristics';
  info: {
    displayName: 'Features';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    rooms: Schema.Attribute.Integer;
    sqMts: Schema.Attribute.Decimal;
    bathrooms: Schema.Attribute.Integer;
    elevator: Schema.Attribute.Boolean;
    pool: Schema.Attribute.Boolean;
    vigilanceSystem: Schema.Attribute.Boolean;
    indoorParking: Schema.Attribute.Integer;
    outdoorParking: Schema.Attribute.Integer;
    reducedMobility: Schema.Attribute.Boolean;
    waterFront: Schema.Attribute.Boolean;
    waterAccess: Schema.Attribute.Boolean;
    petsFriendly: Schema.Attribute.Boolean;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedLocation extends Struct.ComponentSchema {
  collectionName: 'components_shared_locations';
  info: {
    displayName: 'Location';
    icon: 'train';
    description: '';
  };
  attributes: {
    street: Schema.Attribute.String;
    state: Schema.Attribute.String;
    country: Schema.Attribute.String;
    codePostal: Schema.Attribute.String;
    lat: Schema.Attribute.String;
    long: Schema.Attribute.String;
    civicName: Schema.Attribute.String;
    address: Schema.Attribute.String;
    city: Schema.Attribute.String;
    neighborhood: Schema.Attribute.String;
    borough: Schema.Attribute.String;
  };
}

export interface SharedEntity extends Struct.ComponentSchema {
  collectionName: 'components_shared_entities';
  info: {
    displayName: 'Entity';
    icon: 'alien';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String;
    contact: Schema.Attribute.Component<'shared.contact', false>;
    location: Schema.Attribute.Component<'shared.location', false>;
    agency: Schema.Attribute.Relation<'oneToOne', 'api::agency.agency'>;
  };
}

export interface SharedContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'contact';
    icon: 'phone';
    description: '';
  };
  attributes: {
    primaryPhone: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    website: Schema.Attribute.String;
  };
}

export interface SharedBuilding extends Struct.ComponentSchema {
  collectionName: 'components_shared_buildings';
  info: {
    displayName: 'building';
    icon: 'manyToMany';
  };
  attributes: {
    livingArea: Schema.Attribute.Decimal;
    newConstruction: Schema.Attribute.Boolean;
    bungalow: Schema.Attribute.Boolean;
    splitLevel: Schema.Attribute.Boolean;
    semiDetached: Schema.Attribute.Boolean;
    century: Schema.Attribute.Boolean;
    detached: Schema.Attribute.Boolean;
    attached: Schema.Attribute.Boolean;
    buildYear: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.property-characteristics': SharedPropertyCharacteristics;
      'shared.media': SharedMedia;
      'shared.location': SharedLocation;
      'shared.entity': SharedEntity;
      'shared.contact': SharedContact;
      'shared.building': SharedBuilding;
    }
  }
}
