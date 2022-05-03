export const CHANGE_FIELD = 'CHANGE_FIELD';
export const SHOW_BOX = 'SHOW_BOX';
export const BUY_CTA = 'BUY_CTA';
export const SELL_CTA = 'SELL_CTA';

export const changeField = (field, value) => ({
    type: CHANGE_FIELD,
    field: field,
    value: value,
  });
export const showBox = (statusModal) => ({
    type: SHOW_BOX,
    statusModal: statusModal,
});

export const buyCTA = (name, rate, inverseRate, quantity) => ({
    type: BUY_CTA,
    name: name,
    rate: rate,
    inverseRate: inverseRate,
    quantity: quantity,
});

export const sellCTA = (name, quantity) => ({
    type: SELL_CTA,
    name: name,
    quantity: quantity,
});






