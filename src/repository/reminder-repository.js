const { NotificationTicket } = require("../models/index");
const { Op } = require('sequelize');

class reminderRepository {
  async getAllReminder() {
    try {
      const response = await NotificationTicket.findAll();
      return response;
    } catch (error) {
        console.log(error);
        throw error;

    }
  }
  async createReminder(data){
    try {
        const response = await NotificationTicket.create(data);
        return response
    } catch (error) {
        console.log(error);
        throw error;
    }
  }

  async get(filter){
    try {
        const response = await NotificationTicket.findAll({
            where:{
                status:filter.status,
                notificationTime:{
                    [Op.lte]:new Date()
                }
            }
        })
        return response
    } catch (error) {
        throw error;
    }
  }

  async update(responseId,data){
    try {
      const response = await NotificationTicket.update(data,{
        where:{
          id:responseId
        }
      })
      return response
    } catch (error) {
      throw error
    }
  }
}

module.exports = reminderRepository