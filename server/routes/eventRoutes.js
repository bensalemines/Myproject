const express = require ('express');
const router = express.Router() ;
const{createEvent,getEventList,deleteEvent, editEvent} = require('../controllers/eventController.js');
const multer = require ('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const filename = Date.now() + '-' +file.originalname; 
      cb(null,filename )
    }
  })
  
  const upload = multer({ storage: storage })

router.post('/addEvent',upload.single('event-image'),createEvent)
router.get('/',getEventList )
router.delete('/:_id',deleteEvent)
router.put('/update/:_id', editEvent)
module.exports = router