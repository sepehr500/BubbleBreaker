import request from 'superagent';
import R from 'ramda';

const apiUrl = 'https://rdg6sppiog.execute-api.us-east-1.amazonaws.com/prod';

const sourcesToArray = R.pipe(
  R.path(['body', 'Items']),
  R.head,
  R.filter(R.is(Object)),
  R.toPairs,
  R.map(site => R.assoc('siteName', site[0], site[1])),
);

export const fetchHeadlines = () => request.get(apiUrl).then(sourcesToArray);
