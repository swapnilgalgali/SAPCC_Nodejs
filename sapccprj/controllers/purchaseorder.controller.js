const PO = require('../models/purchaseorder.model');


exports.po_create = function (req, res) {
    let po = new PO(
        {
            bookingref: req.body.bookingref,
            ponumber:  Math.floor(Math.random() * 99999999) + 1,
            cusomterid: req.body.cusomterid

        }
    );

    po.save(function (err) {
        if (err) {
            return console.log(err);
        }
        res.send('Purchase Order Created successfully')
    })
};


//Simple version, without validation or sanitation



exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.po_details = function (req, res) {
    PO.find({bookingref:{$eq:req.params.bookingref} }, function (err, po) {
            if (err) return console.log(err);
        res.send(po);
    })
};