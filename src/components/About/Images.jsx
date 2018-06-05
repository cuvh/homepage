import React from "react";

import afterWorkActivitiesAtEnhancv from "assets/img/about/photo/afterwork-activities-at-enhancv.jpg";
import enhancvPowerWeek from "assets/img/about/photo/enhancv-powerweek.jpg";
import enhancvAtVenice from "assets/img/about/photo/enhancv-at-venice@2x.jpg";
import enhancvAtTrastanaya from "assets/img/about/photo/enhancv-at-trastanaya.jpg";
import enhancvOfficeParty from "assets/img/about/photo/enhancv-office-party.jpg";
import enhancvFoundersAwards from "assets/img/about/photo/enhancv-founders-awards.jpg";
import amealAtNoon from "assets/img/about/photo/a-meal-at-noon.jpg";
import enhancvPowerWeekPlaning from "assets/img/about/photo/enhancv-powerweek-planing.jpg";
import enhancvStandUpMeeting from "assets/img/about/photo/enhancv-standup-meeting@2x.jpg";
import jumpingAtThePool from "assets/img/about/photo/jumping-at-the-pool@2x.jpg";
import enhancvWinterRetreat from "assets/img/about/photo/enhancv-winter-retreat.jpg";
import explainingTheVision from "assets/img/about/photo/explaining-the-vision.jpg";
import outdoorWorkDay from "assets/img/about/photo/outdoor-workday.jpg";
import mzkArt from "assets/img/about/photo/mzk-art-events@2x.jpg";
import slavDancing from "assets/img/about/photo/slav-dancing-near-the-lake.jpg";
import wingChunTraining from "assets/img/about/photo/wingchun-training.jpg";
import mitakaSea from "assets/img/about/photo/mitak-at-the-sea.jpg";
import theHumanArc from "assets/img/about/photo/the-human-arc@2x.jpg";
import yogaEnhancv from "assets/img/about/photo/yoga-at-enhancv@2x.jpg";
import workingAttitude from "assets/img/about/photo/working-attitude.jpg";
import poolArt from "assets/img/about/photo/pool-art.jpg";
import yoga from "assets/img/about/photo/yoga-at-the-archeology-site.jpg";

function generateImageStyle(image) {
	return { backgroundImage: `url(${image})` };
}

export default function Images() {
	return (
		<div className="about-photos lt-container lt-xs-h-12 lt-sm-h-9 lt-md-h-11 lt-lg-h-12">
			<div
			 style={generateImageStyle(afterWorkActivitiesAtEnhancv)}
			 className="lt visible-lg visible-md
                lt-xs-x-0 lt-xs-y-0 lt-xs-w-1 lt-xs-h-1
                lt-sm-x-0 lt-sm-y-0 lt-sm-w-1 lt-sm-h-1
                lt-md-x-0 lt-md-y-0 lt-md-w-1 lt-md-h-1
                lt-lg-x-0 lt-lg-y-0 lt-lg-w-1 lt-lg-h-1"
			/>
			<div
			 style={generateImageStyle(enhancvPowerWeek)}
			 className="lt visible-lg
                lt-xs-x-0 lt-xs-y-0 lt-xs-w-1 lt-xs-h-1
                lt-sm-x-0 lt-sm-y-0 lt-sm-w-1 lt-sm-h-1
                lt-md-x-0 lt-md-y-0 lt-md-w-2 lt-md-h-1
                lt-lg-x-0 lt-lg-y-1 lt-lg-w-1 lt-lg-h-1"
			/>
			<div
			 style={generateImageStyle(enhancvAtVenice)}
			 className="lt
                lt-xs-x-0 lt-xs-y-0 lt-xs-w-1 lt-xs-h-1
                lt-sm-x-0 lt-sm-y-0 lt-sm-w-2 lt-sm-h-2
                lt-md-x-1 lt-md-y-0 lt-md-w-2 lt-md-h-2
                lt-lg-x-1 lt-lg-y-0 lt-lg-w-2 lt-lg-h-2"
			/>
			<div
			 style={generateImageStyle(enhancvAtTrastanaya)}
			 className="lt visible-lg visible-md
                lt-xs-x-0 lt-xs-y-0 lt-xs-w-1 lt-xs-h-1
                lt-sm-x-0 lt-sm-y-0 lt-sm-w-1 lt-sm-h-1
                lt-md-x-0 lt-md-y-1 lt-md-w-1 lt-md-h-1
                lt-lg-x-3 lt-lg-y-0 lt-lg-w-1 lt-lg-h-2"
			/>
			<div
			 style={generateImageStyle(enhancvOfficeParty)}
			 className="lt visible-lg visible-md
                lt-xs-x-0 lt-xs-y-0 lt-xs-w-1 lt-xs-h-1
                lt-sm-x-0 lt-sm-y-0 lt-sm-w-1 lt-sm-h-1
                lt-md-x-1 lt-md-y-3 lt-md-w-1 lt-md-h-1
                lt-lg-x-1 lt-lg-y-2 lt-lg-w-1 lt-lg-h-1"
			/>
			<div
			 style={generateImageStyle(enhancvFoundersAwards)}
			 className="lt
                lt-xs-x-0 lt-xs-y-1 lt-xs-w-1 lt-xs-h-2
                lt-sm-x-0 lt-sm-y-2 lt-sm-w-1 lt-sm-h-2
                lt-md-x-0 lt-md-y-2 lt-md-w-1 lt-md-h-2
                lt-lg-x-0 lt-lg-y-2 lt-lg-w-1 lt-lg-h-2"
			/>
			<div
			 style={generateImageStyle(amealAtNoon)}
			 className="lt visible-lg
                lt-xs-x-0 lt-xs-y-0 lt-xs-w-1 lt-xs-h-1
                lt-sm-x-0 lt-sm-y-0 lt-sm-w-1 lt-sm-h-1
                lt-md-x-0 lt-md-y-0 lt-md-w-2 lt-md-h-1
                lt-lg-x-1 lt-lg-y-3 lt-lg-w-1 lt-lg-h-1"
			/>
			<div
			 style={generateImageStyle(enhancvPowerWeekPlaning)}
			 className="lt
                lt-xs-x-0 lt-xs-y-3 lt-xs-w-1 lt-xs-h-1
                lt-sm-x-1 lt-sm-y-2 lt-sm-w-1 lt-sm-h-1
                lt-md-x-1 lt-md-y-2 lt-md-w-2 lt-md-h-1
                lt-lg-x-2 lt-lg-y-2 lt-lg-w-2 lt-lg-h-1"
			/>
			<div
			 style={generateImageStyle(enhancvStandUpMeeting)}
			 className="lt visible-lg visible-md
                lt-xs-x-0 lt-xs-y-0 lt-xs-w-1 lt-xs-h-1
                lt-sm-x-0 lt-sm-y-0 lt-sm-w-1 lt-sm-h-1
                lt-md-x-2 lt-md-y-4 lt-md-w-1 lt-md-h-2
                lt-lg-x-3 lt-lg-y-3 lt-lg-w-1 lt-lg-h-2"
			/>
			<div
			 style={generateImageStyle(jumpingAtThePool)}
			 className="lt
                lt-xs-x-0 lt-xs-y-4 lt-xs-w-1 lt-xs-h-1
                lt-sm-x-0 lt-sm-y-4 lt-sm-w-2 lt-sm-h-2
                lt-md-x-0 lt-md-y-4 lt-md-w-2 lt-md-h-2
                lt-lg-x-0 lt-lg-y-4 lt-lg-w-3 lt-lg-h-3"
			/>
			<div
			 style={generateImageStyle(enhancvWinterRetreat)}
			 className="lt
                lt-xs-x-0 lt-xs-y-5 lt-xs-w-1 lt-xs-h-1
                lt-sm-x-1 lt-sm-y-3 lt-sm-w-1 lt-sm-h-1
                lt-md-x-2 lt-md-y-3 lt-md-w-1 lt-md-h-1
                lt-lg-x-2 lt-lg-y-3 lt-lg-w-1 lt-lg-h-1"
			/>
			<div
			 style={generateImageStyle(explainingTheVision)}
			 className="lt visible-lg
                lt-xs-x-0 lt-xs-y-0 lt-xs-w-1 lt-xs-h-1
                lt-sm-x-0 lt-sm-y-0 lt-sm-w-1 lt-sm-h-1
                lt-md-x-0 lt-md-y-0 lt-md-w-2 lt-md-h-1
                lt-lg-x-0 lt-lg-y-7 lt-lg-w-1 lt-lg-h-1"
			/>
			<div
			 style={generateImageStyle(outdoorWorkDay)}
			 className="lt
                lt-xs-x-0 lt-xs-y-6 lt-xs-w-1 lt-xs-h-2
                lt-sm-x-0 lt-sm-y-6 lt-sm-w-1 lt-sm-h-1
                lt-md-x-2 lt-md-y-9 lt-md-w-1 lt-md-h-2
                lt-lg-x-3 lt-lg-y-5 lt-lg-w-1 lt-lg-h-2"
			/>
			<div
			 style={generateImageStyle(mzkArt)}
			 className="lt
                lt-xs-x-0 lt-xs-y-8 lt-xs-w-1 lt-xs-h-1
                lt-sm-x-1 lt-sm-y-6 lt-sm-w-1 lt-sm-h-1
                lt-md-x-1 lt-md-y-6 lt-md-w-2 lt-md-h-2
                lt-lg-x-1 lt-lg-y-7 lt-lg-w-2 lt-lg-h-2"
			/>
			<div
			 style={generateImageStyle(slavDancing)}
			 className="lt visible-lg visible-md
                lt-xs-x-0 lt-xs-y-0 lt-xs-w-1 lt-xs-h-1
                lt-sm-x-0 lt-sm-y-0 lt-sm-w-1 lt-sm-h-1
                lt-md-x-0 lt-md-y-6 lt-md-w-1 lt-md-h-2
                lt-lg-x-0 lt-lg-y-8 lt-lg-w-1 lt-lg-h-2"
			/>
			<div
			 style={generateImageStyle(wingChunTraining)}
			 className="lt visible-lg visible-md
                lt-xs-x-0 lt-xs-y-0 lt-xs-w-1 lt-xs-h-1
                lt-sm-x-0 lt-sm-y-0 lt-sm-w-1 lt-sm-h-1
                lt-md-x-1 lt-md-y-9 lt-md-w-1 lt-md-h-1
                lt-lg-x-3 lt-lg-y-7 lt-lg-w-1 lt-lg-h-1"
			/>
			<div
			 style={generateImageStyle(mitakaSea)}
			 className="lt visible-lg
                lt-xs-x-0 lt-xs-y-0 lt-xs-w-1 lt-xs-h-1
                lt-sm-x-0 lt-sm-y-0 lt-sm-w-1 lt-sm-h-1
                lt-md-x-0 lt-md-y-0 lt-md-w-2 lt-md-h-1
                lt-lg-x-3 lt-lg-y-8 lt-lg-w-1 lt-lg-h-1"
			/>
			<div
			 style={generateImageStyle(theHumanArc)}
			 className="lt
                lt-xs-x-0 lt-xs-y-9 lt-xs-w-1 lt-xs-h-1
                lt-sm-x-0 lt-sm-y-7 lt-sm-w-2 lt-sm-h-1
                lt-md-x-0 lt-md-y-8 lt-md-w-3 lt-md-h-1
                lt-lg-x-1 lt-lg-y-9 lt-lg-w-3 lt-lg-h-1"
			/>
			<div
			 style={generateImageStyle(yogaEnhancv)}
			 className="lt
                lt-xs-x-0 lt-xs-y-10 lt-xs-w-1 lt-xs-h-1
                lt-sm-x-0 lt-sm-y-8 lt-sm-w-1 lt-sm-h-1
                lt-md-x-0 lt-md-y-9 lt-md-w-1 lt-md-h-1
                lt-lg-x-0 lt-lg-y-10 lt-lg-w-2 lt-lg-h-2"
			/>
			<div
			 style={generateImageStyle(workingAttitude)}
			 className="lt visible-lg
                lt-xs-x-0 lt-xs-y-0 lt-xs-w-1 lt-xs-h-1
                lt-sm-x-0 lt-sm-y-0 lt-sm-w-1 lt-sm-h-1
                lt-md-x-0 lt-md-y-0 lt-md-w-2 lt-md-h-1
                lt-lg-x-2 lt-lg-y-10 lt-lg-w-1 lt-lg-h-1"
			/>
			<div
			 style={generateImageStyle(poolArt)}
			 className="lt
                lt-xs-x-0 lt-xs-y-11 lt-xs-w-1 lt-xs-h-1
                lt-sm-x-1 lt-sm-y-8 lt-sm-w-1 lt-sm-h-1
                lt-md-x-0 lt-md-y-10 lt-md-w-2 lt-md-h-1
                lt-lg-x-3 lt-lg-y-10 lt-lg-w-1 lt-lg-h-1"
			/>
			<div
			 style={generateImageStyle(yoga)}
			 className="lt visible-lg
                lt-xs-x-0 lt-xs-y-0 lt-xs-w-1 lt-xs-h-1
                lt-sm-x-0 lt-sm-y-0 lt-sm-w-1 lt-sm-h-1
                lt-md-x-0 lt-md-y-10 lt-md-w-1 lt-md-h-1
                lt-lg-x-2 lt-lg-y-11 lt-lg-w-2 lt-lg-h-1"
			/>
		</div>
	);
}
