'use strict';

/**
 * instructie service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::instructie.instructie');
