'use strict';

const Service = require('egg').Service;

class EventService extends Service {
  async list(state, type) {
    const { ctx, app } = this;
    let url = `${app.config.server.apiUrl}/v3/events`;
    const params = [];
    if (state) {
      params.push(`state=${state}`);
    }
    if (type) {
      params.push(`type=${type}`);
    }
    url += (params.length ? '?' + params.join('&') : '');
    const data = await app.curl(url, {
      method: 'GET',
      contentType: 'json',
      dataType: 'json',
      followRedirect: true,
    });
    return data;
  }
}

module.exports = EventService;
