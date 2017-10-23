const sql = require('mssql');
const config = require('../config');

module.exports = {
    getProvinces: async () => {
        try {
            console.log("Provinces: opening connection");
            let pool = await sql.connect(config);
            let first_result = await pool.request()
                .query("SELECT * FROM PROVINCES");
            sql.close();
            console.log("Provinces: closed connection");
            return first_result.recordset;
        } catch (err) {
            sql.close();
            console.log(err);
        }
    },

    getCombos: async () => {
        try {
            console.log("Combos: opening connection");
            let pool = await sql.connect(config);
            let first_result = await pool.request()
                .query("SELECT * FROM FOOD_COMBOS");
             sql.close();
            console.log("Combos: closed connection");
            return first_result.recordset;
        } catch (err) {
            sql.close();
            console.log(err);
        }
    },

    getCustomerMeals: async () => {
        try {
            let pool = await sql.connect(config);
            let first_result = await pool.request()
                .query("SELECT * FROM CUSTOMER_MEALS");
            sql.close();
            return first_result.recordset;
        } catch (err) {
            sql.close();
            console.log(err);
        }
    },

    sendNewMeal: async (obj) => {
      try {
          let pool = await sql.connect(config);
          let result = await pool.request()
              .query(`
                INSERT INTO CUSTOMER_MEALS
                (
                   MEAL_NAME,
                   MEAL_IMAGE,
                   MEAL_DATE_SENT,
                   MEAL_DESCRIPTION
                )
                VALUES
                (
                    ${obj.meal_name},
                    ${obj.meal_image},
                    ${obj.meal_date_sent},
                    ${obj.meal_description}
                );
              `);
          sql.close();
          return result;
      }  catch (err) {
          sql.close();
          console.log(err);
      }
    },

    getFullName: async (f_name, l_name) => {
        try {
            let pool = await sql.connect(config);
            let result = await pool.request()
                .query(`SELECT * ` +
                    `FROM ORDERS ` +
                    `WHERE user_f_name='${f_name}' AND user_l_name='${l_name}'`);
            sql.close();
            return result.recordset;
        } catch(err){
            sql.close();
            console.log(err);
        }
    },

    sendNewOrder: async (obj) => {
        try {
            let pool = await sql.connect(config);
            console.log(obj);
            let result = await pool.request()
                .query(`
                    INSERT INTO ORDERS
                    (
                        user_f_name,
                        user_l_name,
                        city,
                        postal_code,
                        province,
                        phone_number,
                        combo_id,
                        delivery,
                        comments,
                        order_date
                    )
                    VALUES
                    (
                        '${obj.first_name}',
                        '${obj.last_name}',
                        '${obj.city}',
                        '${obj.postal_code}',
                        '${obj.province}',
                        '${obj.phone_number}',
                        '${obj.food}',
                        '${obj.delivery}',
                        '${obj.comments}',
                        '${obj.order_date}'
                    );
                `);
            sql.close();
            return result.recordset;
        }catch (err) {
            sql.close();
            console.log(err);
        }
    }
};