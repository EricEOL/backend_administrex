const Requisition = require('../models/Requisition');

const requisitionController = {
    register: async function (req, res) {

        const requisition = new Requisition({
            req_number: req.body.req_number,
            req_section: req.body.req_section,
            req_type: req.body.req_type,
            req_object: req.body.req_object,
            value: req.body.value,
        });

        try {
            const savedRequisition = requisition.save();
            res.send(savedRequisition);
            console.log(savedRequisition);
        } catch(error) {
            res.status(400).send(error);
            console.log(error);
        }
    }
}

module.exports = requisitionController;