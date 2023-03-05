const bigObject = {
  'commit': {
    'id': 1,
    'value': 'this is text'
  },
  user: {
    id: 3,
    authorization: false
  }
};

type typeBigObject =  typeof bigObject;
type typeBigObjectKeys = keyof typeBigObject;

const a: typeBigObject = {
  commit: {
    id: 333,
    value: 'yes!'
  },
  user: {
    authorization: true,
    id: 3
  }
};

const b: typeBigObjectKeys = 'commit'
