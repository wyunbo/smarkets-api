'use strict';

const Controller = require('egg').Controller;
const buildBody = require('../const').buildBody;
class EventController extends Controller {
  async list() {
    const { ctx } = this;
    const { state, type } = ctx.query;
    const rs = await ctx.service.event.list(state, type);
    ctx.logger.info(rs);
    ctx.body = buildBody({
      eventList: rs.data,
    });
  }
}

module.exports = EventController;
