
import { describe, it } from 'mocha';

import { expect } from 'chai'
import { HTTPTransport, Methods } from './HTTPTransport.ts';

describe('HTTPTransport', () => {

  describe('.get', () => {
    it('должен добавить параметры запроса к указанному URL при выполнении GET запроса', async () => {

      const httpTransport = new HTTPTransport();
    
      httpTransport.request = (url: string) => Promise.resolve(url);
      
      const url = 'http://test.com/api';
      const options = { data: { page: 2, sortby: 'desc' }, method: Methods.GET };
      const result = await httpTransport.get(url, options);
      
      expect(result).to.equal(`${url}?page=2&sortby=desc`);
    });
  });
  
});