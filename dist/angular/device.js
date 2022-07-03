const express = require("express");
const router = express.Router();
var sequelize = require('sequelize');



const Device = require("../model/device");
const UserDevice = require("../model/user_device");
const CustomerUserDevice = require("../model/customer_user_device");
const CustomerDevice = require("../model/customer_device");
const Customer = require("../model/customer");
const CustomerResellerDevice = require("../model/customer_reseller_device");
const Position = require("../model/position");
const Events = require("../model/events");
const DeviceCategory = require("../model/device_category");
const POI = require("../model/user_poi");
const dateFormat = require("../controller/dateFormat");
const { Op } = require('sequelize');

router.post("/addDevice", (req, res) => {
  console.log(req.body)
  Device.create({
    name: req.body.deviceName,
    uniqueid: req.body.identifier,
    groupid: req.body.group,
    positionid: 1,
    phone: req.body.phone,
    model: req.body.model,
    contact: req.body.contact,
    category: req.body.category,
    disabled: req.body.disabled,
    attributes: req.body.attributes,
    created_by: req.body.created_by,
  })
    .then(data => {

      UserDevice.create({
        userid: req.body.created_by,
        deviceid: data.id
      }).then(data2 => { res.send(data2) }).catch()
    }
    )
    .catch(err => {
      // console.log("test")
      console.log(err)
      res.send({ id: req.body.identifier, message: { reason: "Duplicate entity" } });
    });
});

router.get("/listDevices", (req, res) => {
  Device.findAll(
    // { order: [['name', 'ASC']] }

  )
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});


router.post("/listDevicesByPage", (req, res) => {
  console.log(req.body)
  const page = req.body.currentPage;
  const pageSize = 25
  const offset = (page - 1) * pageSize;
  const limit = pageSize;
  var array = {}
  if (req.body.name)
    array.name = req.body.name;
  if (req.body.imei)
    array.uniqueid = req.body.imei;
  if (req.body.category)
    array.category = req.body.category;
  if (req.body.model)
    array.model = req.body.model;

    if(req.body.fromdate){
      var startedDate = req.body.fromdate;
     }
     
 
     if(req.body.todate){
      var endDate = req.body.todate;
       array.created_time= {[Op.between] : [startedDate , endDate ]}
     }
 
    Device.findAndCountAll({
    where: array,
    offset,
    limit
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});


router.get("/listFreeDevice", (req, res) => {
  Device.findAll(
    {
      where:
      {
        assign_customer_status: 0,
        reseller_id: 0
      },
      // order: [['name', 'ASC']]
    }
  )
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});


router.get("/:id/editDevice", (req, res) => {
  Device.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});


router.put("/:id/updateDevice", (req, res) => {
  console.log(req.body)
  console.log(req.params.id)
  Device.update({
    name: req.body.deviceName,
    uniqueid: req.body.identifier,
    groupid: req.body.group,
    phone: req.body.phone,
    model: req.body.model,
    contact: req.body.contact,
    category: req.body.category,
    disabled: req.body.disabled,
    attributes: req.body.attributes,
    created_by: req.body.created_by,
    updated_by: req.body.updated_by,
    updated_time: req.body.updated_time
  }, {
    where: {
      id: req.params.id
    }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err)
      res.json("error:" + err);
    });
});


router.delete("/:id/deleteDevice", (req, res) => {
  Device.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(data => {

    })
    .catch(err => {

      res.status(err.status >= 100 && err.status < 600 ? err.code : 500).send(err.message);
    });
});

// router.post("/addUserDevice", (req, res) => {
//   console.log(req.body)
//   UserDevice.create({
//     user_id: req.body.userId,
//     device_id: req.body.deviceId,

//   })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       console.log(err)
//     });
// });


router.post("/addUserDevice", (req, res) => {
  var status = 1;
  console.log(req.body)
  UserDevice.create({
    userid: req.body.userId,
    deviceid: req.body.deviceId,

  })
    .then(data => {
      Device.update({ assign_user_status: status, assign_user_id: req.body.userId }, {
        where: {
          id: req.body.deviceId
        }
      }),
        res.send(data);
    })
    .catch(err => {
      console.log(err)
      //res.send(err);
    });
});

// router.post("/deleteUserDevice", (req, res) => {
//   UserDevice.destroy({
//     where: {
//       user_id:req.body.userId, 
//       device_id: req.body.deviceId 
//   }
// })
//     .then(data => {

//     })
//     .catch(err => {
//       res.status(err).send(err.message);
//     });
// });

router.post("/deleteUserDevice", (req, res) => {
  var status = 0;
  var id = 0;
  UserDevice.destroy({
    where: {
      userid: req.body.userId,
      deviceid: req.body.deviceId
    }
  })
    .then(data => {
      Device.update({ assign_user_status: status, assign_user_id: id }, {
        where: {
          id: req.body.deviceId
        }
      })
    })
    .catch(err => {
      res.status(err).send(err.message);
    });
});

router.get("/:id/getDeviceByUserTest", (req, res) => {
  UserDevice.findAll({
    where: {
      userid: req.params.id
    }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id/getDeviceByUser", (req, res) => {
  UserDevice.findAll({
    where: {
      userid: req.params.id
    }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/getDeviceByAllUser", (req, res) => {
  UserDevice.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});

/*-------------------------Customer----------------------------*/

router.post("/addCustomerDevice", (req, res) => {
  console.log(req.body)
  var status = 1;
  CustomerDevice.create({
    customer_id: req.body.customerId,
    deviceid: req.body.deviceId,

  })
    .then(data => {
      Device.update({ assign_customer_status: status, assign_customer_id: req.body.customerId }, {
        where: {
          id: req.body.deviceId
        }
      }),
      Customer.increment('customer_device', { by: 1, where: { customer_id: req.body.customerId }});
    })
    .catch(err => {
      console.log(err)
    });
});

router.post("/deleteCustomerDevice", (req, res) => {
  var status = 0;
  var id = 0;
  CustomerDevice.destroy({
    where: {
      customer_id: req.body.customerId,
      deviceid: req.body.deviceId
    }
  })
    .then(data => {
      Device.update({ assign_customer_status: status, assign_customer_id: id }, {
        where: {
          id: req.body.deviceId
        }
      }),
      Customer.decrement('customer_device', { by: 1, where: { customer_id: req.body.customerId }});
    })
    .catch(err => {
      res.status(err).send(err.message);
    });
});

router.post("/addDeviceWithCustomerByImport", (req, res) => {
  console.log(req.body)
  var status = 1;
  CustomerDevice.create({
    customer_id: req.body.customerId,
    deviceid: req.body.deviceId,

  })
    .then(data => {
      Device.update({ assign_customer_status: status, assign_customer_id: req.body.customerId }, {
        where: {
          id: req.body.deviceId
        }
      })
      res.send({ id: req.body.deviceId, message: { status: 'Successful', reason: "OK" } })
    }
  
    )
    .catch(err => {
      res.send({ id: req.body.deviceId, message: { status: 'Fail', reason: "Already assigned" } });
    });
});
// =============================================Reseller start==============


router.get("/:id/getDeviceIdByIMEI", (req, res) => {
  Device.findOne({
    where: {
      uniqueid: req.params.id
    }
  })
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.send({ id: req.body.deviceId, message: { status: 'Fail', reason: "Not valid" } });
    });
});
router.post("/addCustomerResellerDevice", (req, res) => {
  console.log(req.body)
  CustomerResellerDevice.update({
    customer_id: req.body.customerId
  }, {
    where: {
      deviceId: req.body.deviceId
    }
  })
    .then(data => {
      Device.update({ assign_customer_id: req.body.customerId }, {
        where: {
          id: req.body.deviceId
        }
      })
    })
    .catch(err => {
      console.log(err)
    });
});


router.post("/deleteCustomerResellerDevice", (req, res) => {

  CustomerResellerDevice.update({
    customer_id: 0
  }, {
    where: {
      deviceId: req.body.deviceId
    }
  })
    .then(data => {
      Device.update({ assign_customer_id: 0 }, {
        where: {
          id: req.body.deviceId
        }
      })
    })
    .catch(err => {
      res.status(err).send(err.message);
    });
});

router.get("/:id/getDeviceByCustomerResellerId", (req, res) => {

  CustomerResellerDevice.findAll({
    where: {
      customer_id: req.params.id
    }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err)
    });
});

router.post("/addDeviceWithReseller", (req, res) => {
  console.log(req.body)
  CustomerResellerDevice.create({
    reseller_id: req.body.reseller_id,
    deviceid: req.body.deviceId,

  })
    .then(data => {
      Device.update({ reseller_id: req.body.reseller_id }, {
        where: {
          id: req.body.deviceId
        }
      }),
      Customer.increment('customer_device', { by: 1, where: { id: req.body.reseller_id }}),
        res.send({ id: req.body.deviceId, message: { status: 'Successful', reason: "OK" } })
    }

    )
    .catch(err => {
      res.send({ id: req.body.deviceId, message: { status: 'Fail', reason: "Already assigned" } });
    });
});

router.get("/:id/getDeviceByResellerId", (req, res) => {
  Device.findAll({
    where: {
      reseller_id: req.params.id,
      assign_customer_id: 0
    }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});
router.get("/:id/getDeviceByResellerIdFor", (req, res) => {
  Device.findAll({
    where: {
      reseller_id: req.params.id,
      //assign_customer_id: 0
    }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});


router.post("/deleteDeviceFromReseller", (req, res) => {
  var status = 0;
  var id = 0;
  CustomerResellerDevice.destroy({
    where: {
      reseller_id: req.body.reseller_id,
    deviceid: req.body.deviceId,
    }
  })
    .then(data => {
      Device.update({ reseller_id: id }, {
        where: {
          id: req.body.deviceId
        }
      }),
      Customer.decrement('customer_device', { by: 1, where: { id: req.body.reseller_id }})
    })
    .catch(err => {
      res.status(err).send(err.message);
    });
});

router.post("/listEventsByReseller", (req, res) => {
  console.log(req.body.id)
  const limit = 30;
  Events.findAll(
    {
      where: {
        deviceid: req.body.id,
       
      },
      limit
    }
  )
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});
// =============================================Reseller End==============
router.get("/:id/getDeviceByCustomer", (req, res) => {
  CustomerDevice.findAll({
    where: {
      customer_id: req.params.id
    }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id/getDeviceByCustomerId", (req, res) => {
  Device.findAll({
    where: {
      assign_customer_id: req.params.id,
    }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/listPositions", (req, res) => {
  Position.findAll(
  )
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/listHistoryPositions", (req, res) => {
  console.log(req.body)
  const startedDate = req.body.from_date;
  const endDate = req.body.to_date;
  Position.findAll(
    {
      where: {
        deviceid: req.body.id,
        fixtime: { [Op.between]: [startedDate, endDate] }
      }
    }
  )
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/listEvents", (req, res) => {
  Events.sequelize.query("SELECT * From  `tc_events` ORDER BY ID DESC LIMIT 30 ", { type: sequelize.QueryTypes.SELECT })
    .then(function (data) {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});


router.post("/movingPositions", (req, res) => {

  //  var startedDate = new Date(Date.now()-295*24*60*60*1000-64*60*60*1000-670*1000*60);
  //  var endDate = new Date(Date.now()+5000 -295*24*60*60*1000-64*60*60*1000-670*1000*60);
//fixtime:  {[Op.between] : [startedDate , endDate ]},

  Position.findAll(
    {
      where: {
        // fixtime:  {[Op.between] : [startedDate , endDate ]},
        fixtime: { [Op.gt]: req.body.fixtime },
        deviceid: req.body.id
      }
    }
  )
    .then(da => {
      res.send(da);
      console.log(da)
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id/getDeviceCurrentPositionById", (req, res) => {
  console.log(req.params.id)
  const id = req.params.id
  Device.sequelize.query("SELECT * From  `tc_devices` Inner Join `tc_positions` On tc_devices.positionid=tc_positions.id where tc_devices.id=" + id, { type: sequelize.QueryTypes.SELECT })
    .then(function (data) {
      res.send(data);
    })
});


router.post("/getDevicePositionByPositionId", (req, res) => {
  console.log(req.body.id)
  const id = req.body.id
  Position.findAll({
    where: {
      id: req.body.id
    }
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id/getEventPositionById", (req, res) => {
  const id = req.params.id
  Device.sequelize.query("SELECT * From  `tc_events` Inner Join `tc_positions` On tc_events.positionid=tc_positions.id Inner Join `tc_devices` On tc_events.deviceid=tc_devices.id where tc_events.id=" + id, { type: sequelize.QueryTypes.SELECT })
    .then(function (data) {
      res.send(data);
    })
});


router.post("/listPositionByPage", (req, res) => {
  console.log(req.body)
  const page = req.body.currentPage;
  const pageSize = 25
  const offset = (page - 1) * pageSize;
  const limit = pageSize;
  var array = [' ']
  if (req.body.devicesearch)
    array = req.body.devicesearch;

  Position.findAndCountAll({
    where: {
      fixtime: { [Op.between]: [req.body.fromdate, req.body.todate] },
      deviceid: { [Op.in]: array }
    },
    offset,
    limit,
    order: [['id', 'DESC']]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});



router.post("/listPositionWithDriveStop", (req, res) => {

  var array = [' ']
  if (req.body.devicesearch)
    array = req.body.devicesearch;

  Position.findAll({
    where: {
      fixtime: { [Op.between]: [req.body.fromdate, req.body.todate] },
      deviceid: { [Op.in]: array }
    },
    //order: [['id', 'DESC']] 
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});


Position.hasOne(Events, { foreignKey: 'positionid' })
Events.belongsTo(Position, { foreignKey: 'positionid' })

router.post("/listEventWithPosition", (req, res) => {
  var array = [' ']
  if (req.body.devicesearch)
    array = req.body.devicesearch;

  Events.findAll({
    where: {
      eventtime: { [Op.between]: [req.body.fromdate, req.body.todate] },
      deviceid: { [Op.in]: array }
    },
    include: [Position],
    order: [['deviceid', 'DESC']]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});


router.post("/getIngineOnOffEvent", (req, res) => {
  var array = [' ']
  if (req.body.devicesearch)
    array = req.body.devicesearch;

  Events.findAll({
    where: {
      eventtime: { [Op.between]: [req.body.fromdate, req.body.todate] },
      deviceid: { [Op.in]: array },
      type: { [Op.or]: ['ignitionOn', 'ignitionOff'] },
    },
    //include: [Position],
    order: [['deviceid', 'DESC']]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});


router.post("/getIgnitionOnOffPosition", (req, res) => {

  var array = [' ']
  if (req.body.id)
    array = req.body.id;

  Position.findAll({
    where: {
      id: { [Op.in]: array }
    },
    //order: [['id', 'DESC']] 
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});










router.post("/addDeviceCategory", (req, res) => {
  DeviceCategory.create({
        title: req.body.title,
        icon: req.body.icon,
        created_by: req.body.created_by,
        // type: req.body.type,
        status: req.body.status
    })
        .then(data => {
          res.send({ Success: "Done" })
        })
        .catch(err => {
            console.log(err)
            res.send({ Fail: "Error" })
        });
});

router.get("/listDeviceCategory", (req, res) => {
  DeviceCategory.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log(err);
      });
  });


  router.get("/:id/editDeviceCategory", (req, res) => {
    DeviceCategory.findOne({
      where:{
        id:req.params.id
      }
    })
      .then(data => {
        console.log(data);
        res.send(data);
      })
      .catch(err => {
        console.log(err);
      });
  });


  router.put("/:id/updateDeviceCategory", (req, res) => {
      console.log(req.body)
      DeviceCategory.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        console.log(data);
        res.send(data);
      })
      .catch(err => {
        res.json("error:" + err);
      });
  });


  router.delete("/:id/deleteDeviceCategory", (req, res) => {
    DeviceCategory.destroy({
      where: {
        id: req.params.id 
    }
  })
      .then(data => {
        
      })
      .catch(err => {
      
        res.status(err.status >= 100 && err.status < 600 ? err.code : 500).send(err.message);
      });
  });

 /*============================POI======================*/ 


 router.get("/listPois", (req, res) => {
  POI.findAll(
    // { order: [['name', 'ASC']] }

  )
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/addPois", (req, res) => {
  POI.create({
        name: req.body.name,
        group_id: req.body.group,
        icon_id: req.body.poi_icon,
        description: req.body.description,
        coordinates: req.body.coordinates,
        user_id: req.body.created_by,
        // type: req.body.type,
        status: 1
    })
        .then(data => {
          res.send({ Success: "Done" })
        })
        .catch(err => {
            console.log(err)
            res.send({ Fail: "Error" })
        });
});

module.exports = router;






