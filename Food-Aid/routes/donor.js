// // // const express = require("express");
// // // const router = express.Router();
// // // const middleware = require("../middleware/index.js");
// // // const User = require("../models/user.js");
// // // const Donation = require("../models/donation.js");


// // // router.get("/donor/dashboard", middleware.ensureDonorLoggedIn, async (req,res) => {
// // // 	const donorId = req.user._id;
// // // 	const numPendingDonations = await Donation.countDocuments({ donor: donorId, status: "pending" });
// // // 	const numAcceptedDonations = await Donation.countDocuments({ donor: donorId, status: "accepted" });
// // // 	const numAssignedDonations = await Donation.countDocuments({ donor: donorId, status: "assigned" });
// // // 	const numCollectedDonations = await Donation.countDocuments({ donor: donorId, status: "collected" });
// // // 	res.render("donor/dashboard", {
// // // 		title: "Dashboard",
// // // 		numPendingDonations, numAcceptedDonations, numAssignedDonations, numCollectedDonations
// // // 	});
// // // });

// // // router.get("/donor/donate", middleware.ensureDonorLoggedIn, (req,res) => {
// // // 	res.render("donor/donate", { title: "Donate" });
// // // });

// // // router.post("/donor/donate", middleware.ensureDonorLoggedIn, async (req,res) => {
// // // 	try
// // // 	{
// // // 		const donation = req.body.donation;
// // // 		donation.status = "pending";
// // // 		donation.donor = req.user._id;
// // // 		const newDonation = new Donation(donation);
// // // 		await newDonation.save();
// // // 		req.flash("success", "Donation request sent successfully");
// // // 		res.redirect("/donor/donations/pending");
// // // 	}
// // // 	catch(err)
// // // 	{
// // // 		console.log(err);
// // // 		req.flash("error", "Some error occurred on the server.")
// // // 		res.redirect("back");
// // // 	}
// // // });

// // // router.get("/donor/donations/pending", middleware.ensureDonorLoggedIn, async (req,res) => {
// // // 	try
// // // 	{
// // // 		const pendingDonations = await Donation.find({ donor: req.user._id, status: ["pending", "rejected", "accepted", "assigned"] }).populate("agent");
// // // 		res.render("donor/pendingDonations", { title: "Pending Donations", pendingDonations });
// // // 	}
// // // 	catch(err)
// // // 	{
// // // 		console.log(err);
// // // 		req.flash("error", "Some error occurred on the server.")
// // // 		res.redirect("back");
// // // 	}
// // // });

// // // router.get("/donor/donations/previous", middleware.ensureDonorLoggedIn, async (req,res) => {
// // // 	try
// // // 	{
// // // 		const previousDonations = await Donation.find({ donor: req.user._id, status: "collected" }).populate("agent");
// // // 		res.render("donor/previousDonations", { title: "Previous Donations", previousDonations });
// // // 	}
// // // 	catch(err)
// // // 	{
// // // 		console.log(err);
// // // 		req.flash("error", "Some error occurred on the server.")
// // // 		res.redirect("back");
// // // 	}
// // // });

// // // router.get("/donor/donation/deleteRejected/:donationId", async (req,res) => {
// // // 	try
// // // 	{
// // // 		const donationId = req.params.donationId;
// // // 		await Donation.findByIdAndDelete(donationId);
// // // 		res.redirect("/donor/donations/pending");
// // // 	}
// // // 	catch(err)
// // // 	{
// // // 		console.log(err);
// // // 		req.flash("error", "Some error occurred on the server.")
// // // 		res.redirect("back");
// // // 	}
// // // });

// // // router.get("/donor/profile", middleware.ensureDonorLoggedIn, (req,res) => {
// // // 	res.render("donor/profile", { title: "My Profile" });
// // // });

// // // router.put("/donor/profile", middleware.ensureDonorLoggedIn, async (req,res) => {
// // // 	try
// // // 	{
// // // 		const id = req.user._id;
// // // 		const updateObj = req.body.donor;	// updateObj: {firstName, lastName, gender, address, phone}
// // // 		await User.findByIdAndUpdate(id, updateObj);
		
// // // 		req.flash("success", "Profile updated successfully");
// // // 		res.redirect("/donor/profile");
// // // 	}
// // // 	catch(err)
// // // 	{
// // // 		console.log(err);
// // // 		req.flash("error", "Some error occurred on the server.")
// // // 		res.redirect("back");
// // // 	}
	
// // // });

// // // router.post("/api/donate", async (req, res) => {
// // //     try {
// // //         const newDonation = {
// // //             foodType: req.body.foodType,
// // //             quantity: req.body.quantity,
// // //             expiry: req.body.expiry,
// // //             status: "pending",
// // //             pickupTime: req.body.pickupTime,
// // //             donorId: "64e7..." // specific ID or generic for hackathon demo
// // //         };
// // //         // Save to MongoDB (assuming you have a Donation model imported)
// // //         // const donation = await Donation.create(newDonation);
// // //         console.log("Received from React:", newDonation);
// // //         res.status(200).json({ message: "Donation received!", id: 123 });
// // //     } catch (err) {
// // //         res.status(500).json({ error: "Failed to save" });
// // //     }
// // // });

// // // module.exports = router;




// // const express = require("express");
// // const router = express.Router();
// // const Donation = require("../models/donation");
// // const User = require("../models/user");

// // // --- API ROUTES FOR REACT FRONTEND ---

// // // 1. CREATE DONATION (POST)
// // // Called when a Donor clicks "Confirm Donation" on the React Frontend
// // router.post("/api/donate", async (req, res) => {
// //     try {
// //         const { foodType, quantity, expiry, pickupTime, donorId, donorName } = req.body;

// //         // Validation
// //         if (!foodType || !quantity) {
// //             return res.status(400).json({ error: "Food details are required" });
// //         }

// //         // Calculate Mock CO2 (1kg food = approx 2.5kg CO2 saved)
// //         const qtyNumber = parseFloat(quantity) || 0;
// //         const co2Calc = (qtyNumber * 2.5).toFixed(1);

// //         // Create the Database Object
// //         const newDonation = new Donation({
// //             foodType: foodType,
// //             quantity: quantity,
// //             expiry: expiry,
// //             pickupTime: pickupTime,
// //             status: "pending", // Default status for new donations
// //             donor: {
// //                 id: donorId,
// //                 name: donorName || "Anonymous Donor"
// //             },
// //             co2Saved: Number(co2Calc)
// //         });

// //         // Save to MongoDB
// //         await newDonation.save();

// //         console.log("✅ Donation Saved:", foodType);
// //         res.status(200).json({ message: "Donation received successfully!", donation: newDonation });

// //     } catch (err) {
// //         console.error("❌ Save Error:", err);
// //         res.status(500).json({ error: "Failed to save donation on server." });
// //     }
// // });

// // // 2. GET DONATIONS (GET)
// // // Updated to support Donor History (userId) AND Receiver Feed (status)
// // router.get("/api/donations", async (req, res) => {
// //     try {
// //         const { userId, status } = req.query;

// //         let query = {};

// //         // If userId is provided, filter for that specific donor's history
// //         if (userId) {
// //             query["donor.id"] = userId;
// //         }

// //         // If status is provided (e.g., status=pending), show only those items
// //         // This allows the Receiver page to fetch only available food
// //         if (status) {
// //             query.status = status;
// //         }

// //         // Fetch from DB, sorted by newest first
// //         const donations = await Donation.find(query).sort({ createdAt: -1 });

// //         res.status(200).json(donations);

// //     } catch (err) {
// //         console.error("❌ Fetch Error:", err);
// //         res.status(500).json({ error: "Failed to fetch donation history." });
// //     }
// // });

// // // 3. GET DONOR STATS (GET)
// // router.get("/api/donor/stats", async (req, res) => {
// //     try {
// //         const { userId } = req.query;
// //         if (!userId) return res.status(400).json({ error: "User ID required" });

// //         const pending = await Donation.countDocuments({ "donor.id": userId, status: "pending" });
// //         const delivered = await Donation.countDocuments({ "donor.id": userId, status: "delivered" });
        
// //         // Calculate Total CO2 saved by this specific donor
// //         const allDonations = await Donation.find({ "donor.id": userId });
// //         const totalCo2 = allDonations.reduce((acc, curr) => acc + (Number(curr.co2Saved) || 0), 0);

// //         res.json({
// //             pending,
// //             delivered,
// //             totalCo2: totalCo2.toFixed(1)
// //         });
// //     } catch (err) {
// //         res.status(500).json({ error: "Stats error" });
// //     }
// // });

// // module.exports = router;



// const express = require("express");
// const router = express.Router();
// const Donation = require("../models/donation");

// // 1. CREATE DONATION (With Location)
// router.post("/api/donate", async (req, res) => {
//     try {
//         const { foodType, quantity, expiry, pickupTime, donorId, donorName, location } = req.body;
        
//         const newDonation = new Donation({
//             foodType, quantity, expiry, pickupTime,
//             donor: { id: donorId, name: donorName },
//             location: location, // { lat: 17.3850, lng: 78.4867 }
//             status: "pending",
//             co2Saved: (parseFloat(quantity) * 2.5).toFixed(1)
//         });

//         await newDonation.save();
//         res.status(200).json(newDonation);
//     } catch (err) {
//         res.status(500).json({ error: "Save failed" });
//     }
// });

// // 2. GET DONATIONS (With Filters)
// router.get("/api/donations", async (req, res) => {
//     try {
//         const { status, agentId } = req.query;
//         let query = {};
        
//         if (status) query.status = status;
//         if (agentId) query["agent.id"] = agentId;

//         const donations = await Donation.find(query).sort({ createdAt: -1 });
//         res.json(donations);
//     } catch (err) {
//         res.status(500).json({ error: "Fetch failed" });
//     }
// });

// // 3. RECEIVER ACCEPT (Status -> 'accepted')
// router.put("/api/donation/:id/accept", async (req, res) => {
//     try {
//         await Donation.findByIdAndUpdate(req.params.id, { status: "accepted" });
//         res.json({ message: "Donation accepted by receiver" });
//     } catch (err) {
//         res.status(500).json({ error: "Update failed" });
//     }
// });

// // 4. AGENT CLAIM (Status -> 'assigned')
// router.put("/api/donation/:id/claim", async (req, res) => {
//     try {
//         const { agentId, agentName } = req.body;
//         await Donation.findByIdAndUpdate(req.params.id, { 
//             status: "assigned",
//             agent: { id: agentId, name: agentName }
//         });
//         res.json({ message: "Agent assigned" });
//     } catch (err) {
//         res.status(500).json({ error: "Claim failed" });
//     }
// });

// module.exports = router;



const express = require("express");
const router = express.Router();
const Donation = require("../models/donation");

// 1. CREATE DONATION
router.post("/api/donate", async (req, res) => {
    try {
        const { foodType, quantity, expiry, pickupTime, donorId, donorName, location } = req.body;
        const newDonation = new Donation({
            foodType, quantity, expiry, pickupTime,
            donor: { id: donorId, name: donorName },
            location: location, 
            status: "pending",
            co2Saved: (parseFloat(quantity) * 2.5).toFixed(1)
        });
        await newDonation.save();
        res.status(200).json(newDonation);
    } catch (err) { res.status(500).json({ error: "Save failed" }); }
});

// 2. GET DONATIONS (With Filters)
router.get("/api/donations", async (req, res) => {
    try {
        const { status, agentId } = req.query;
        let query = {};
        
        // Receiver sees 'pending', Agent sees 'searching_agent'
        if (status) query.status = status;
        if (agentId) query["agent.id"] = agentId;

        const donations = await Donation.find(query).sort({ createdAt: -1 });
        res.json(donations);
    } catch (err) { res.status(500).json({ error: "Fetch failed" }); }
});

// 3. RECEIVER ACCEPT -> Status: 'searching_agent'
router.put("/api/donation/:id/accept", async (req, res) => {
    try {
        const { receiverId, receiverName, location } = req.body; // Capture Receiver Location
        await Donation.findByIdAndUpdate(req.params.id, { 
            status: "searching_agent",
            receiver: { // We need to add this field to schema ideally, or store in 'location'
                id: receiverId,
                name: receiverName,
                location: location // { lat, lng }
            }
        });
        res.json({ message: "Searching for agent..." });
    } catch (err) { res.status(500).json({ error: "Update failed" }); }
});

// 4. AGENT CLAIM -> Status: 'assigned'
router.put("/api/donation/:id/claim", async (req, res) => {
    try {
        const { agentId, agentName } = req.body;
        await Donation.findByIdAndUpdate(req.params.id, { 
            status: "assigned",
            agent: { id: agentId, name: agentName }
        });
        res.json({ message: "Agent assigned" });
    } catch (err) { res.status(500).json({ error: "Claim failed" }); }
});

// 5. AGENT PICKUP -> Status: 'transit'
router.put("/api/donation/:id/pickup", async (req, res) => {
    try {
        await Donation.findByIdAndUpdate(req.params.id, { status: "transit" });
        res.json({ message: "Food picked up" });
    } catch (err) { res.status(500).json({ error: "Update failed" }); }
});

// 6. AGENT DELIVER -> Status: 'delivered'
router.put("/api/donation/:id/deliver", async (req, res) => {
    try {
        await Donation.findByIdAndUpdate(req.params.id, { status: "delivered" });
        res.json({ message: "Food delivered" });
    } catch (err) { res.status(500).json({ error: "Update failed" }); }
});

module.exports = router;