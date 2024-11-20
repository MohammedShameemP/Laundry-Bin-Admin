const express = require("express");
const Slot = require("../models/timeSlot");

exports.createTime = async (req, res) => {
	console.log("req.body", req.body);
	try {
		const { startTime, endTime } = req.body;
		console.log("startTime", startTime);
		console.log("endTime", endTime);

		const existingTime = await Slot.findOne({ startTime: startTime, endTime: endTime });
		console.log("else cndn");
		if (existingTime) {
			res.status(500).json({ status: false, error: true, message: "time slot already exist" });
		}

		const slot = new Slot({
			startTime: startTime,
			endTime: endTime,
		});
		console.log("slot", slot);

		await slot.save();
		res.status(200).json({ status: true, error: false, message: "time slot added" });
	} catch (error) {}
};

exports.allTime = async (req, res) => {
	try {
		const time = await Slot.find();
		res.status(200).json({ status: true, error: false, message: "all time are listed", data: time });
	} catch (error) {
		res.status(500).json({ status: false, error: true, message: "times not available" });
	}
};

exports.deleteTime = async (req, res) => {
	console.log(req.body);
	try {
		const { id } = req.query;
		console.log(id);
		const deletingTime = await Slot.findByIdAndDelete(id);
		if (deletingTime) {
			res.status(200).json({ error: false, status: true, message: "Time deleted successfully" });
			console.log("log time deleted successfully");
		} else {
			res.status(500).json({ error: true, status: false, message: "slot is not found" });
		}
	} catch (error) {
		res.status(400).json({ error: true, status: false, message: "server error" });
	}
};
