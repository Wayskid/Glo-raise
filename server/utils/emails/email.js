export const oneFree = ({ name }) => {
  return `<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
	xmlns:o="urn:schemas-microsoft-com:office:office">

	<head>
		<meta charset="utf-8"> <!-- utf-8 works for most cases -->
		<meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<!-- Use the latest (edge) version of IE rendering engine -->
		<meta name="x-apple-disable-message-reformatting"> <!-- Disable auto-scale in iOS 10 Mail entirely -->
		<title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->

		<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">

		<!-- CSS Reset : BEGIN -->
		<style>
			html,
			body {
				margin: 0 auto !important;
				padding: 0 !important;
				height: 100% !important;
				width: 100% !important;
				background: #f1f1f1;
			}

			/* What it does: Stops email clients resizing small text. */
			* {
				-ms-text-size-adjust: 100%;
				-webkit-text-size-adjust: 100%;
			}

			/* What it does: Centers email on Android 4.4 */
			div[style*="margin: 16px 0"] {
				margin: 0 !important;
			}

			/* What it does: Stops Outlook from adding extra spacing to tables. */
			table,
			td {
				mso-table-lspace: 0pt !important;
				mso-table-rspace: 0pt !important;
			}

			/* What it does: Fixes webkit padding issue. */
			table {
				border-spacing: 0 !important;
				border-collapse: collapse !important;
				table-layout: fixed !important;
				margin: 0 auto !important;
			}

			/* What it does: Uses a better rendering method when resizing images in IE. */
			img {
				-ms-interpolation-mode: bicubic;
			}

			/* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
			a {
				text-decoration: none;
			}

			/* What it does: A work-around for email clients meddling in triggered links. */
			*[x-apple-data-detectors],
			/* iOS */
			.unstyle-auto-detected-links *,
			.aBn {
				border-bottom: 0 !important;
				cursor: default !important;
				color: inherit !important;
				text-decoration: none !important;
				font-size: inherit !important;
				font-family: inherit !important;
				font-weight: inherit !important;
				line-height: inherit !important;
			}

			/* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
			.a6S {
				display: none !important;
				opacity: 0.01 !important;
			}

			/* What it does: Prevents Gmail from changing the text color in conversation threads. */
			.im {
				color: inherit !important;
			}

			/* If the above doesn't work, add a .g-img class to any image in question. */
			img.g-img+div {
				display: none !important;
			}

			/* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
			/* Create one of these media queries for each additional viewport size you'd like to fix */

			/* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
			@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
				u~div .email-container {
					min-width: 320px !important;
				}
			}

			/* iPhone 6, 6S, 7, 8, and X */
			@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
				u~div .email-container {
					min-width: 375px !important;
				}
			}

			/* iPhone 6+, 7+, and 8+ */
			@media only screen and (min-device-width: 414px) {
				u~div .email-container {
					min-width: 414px !important;
				}
			}
		</style>

		<!-- CSS Reset : END -->

		<!-- Progressive Enhancements : BEGIN -->
		<style>
			.primary {
				background: #0d0cb5;
			}

			.blur {
				/* background: url(img/Blur.png); */
				background-color: #222222;
				opacity: 0.98;
			}

			.bg_white {
				background: #ffffff;
			}

			.bg_light {
				background: #fafafa;
			}

			.bg_black {
				background: #000000;
			}

			.bg_dark {
				background: rgba(0, 0, 0, .8);
			}

			.email-section {
				padding: 2.5em;
			}

			/*BUTTON*/
			.btn {
				padding: 5px 15px;
				display: inline-block;
			}

			.btn.btn-primary {
				border-radius: 5px;
				background: #0d0cb5;
				color: #ffffff;
			}

			.btn.btn-white {
				border-radius: 5px;
				background: #ffffff;
				color: #000000;
			}

			.btn.btn-white-outline {
				border-radius: 5px;
				background: #CAFF87;
				border: 1px solid #fff;
				color: black;
				padding: 24px 36px;
			}

			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				font-family: 'Poppins', sans-serif;
				color: #000000;
				margin-top: 0;
			}

			body {
				font-family: 'Poppins', sans-serif;
				font-weight: 400;
				font-size: 15px;
				line-height: 1.8;
				color: rgba(0, 0, 0, .4);
			}

			a {
				color: #0d0cb5;
			}

			table {}

			.box-table {
				max-width: 560px;
			}

			.hero-table {
				max-width: 838px;
				height: 250px;
			}

			.hero-table td {
				background-color: white;
			}

			.box-table td:first-child {
				width: 180px;
			}

			/*LOGO*/

			.logo h1 {
				margin: 0;
			}

			.logo h1 a {
				color: #000000;
				font-size: 20px;
				font-weight: 700;
				text-transform: uppercase;
				font-family: 'Poppins', sans-serif;
			}

			.navigation {
				padding: 0;
			}

			.navigation li {
				list-style: none;
				display: inline-block;
				;
				margin-left: 5px;
				font-size: 13px;
				font-weight: 500;
			}

			.navigation li a {
				color: rgba(0, 0, 0, .4);
			}

			/*HERO*/
			.hero {
				position: relative;
				z-index: 0;
			}

			.hero .overlay {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				content: '';
				width: 100%;
				background: #02B68A;
				z-index: -1;
				height: 735px;
			}

			.hero .icon {}

			.hero .icon a {
				display: block;
				width: 60px;
				margin: 0 auto;
			}

			.hero .text {
				color: rgba(255, 255, 255, .8);
			}

			.hero .text h2 {
				color: #ffffff;
				margin-bottom: 0;
			}


			/*HEADING SECTION*/
			.heading-section {}

			.heading-section h2 {
				color: #000000;
				font-size: 20px;
				margin-top: 0;
				line-height: 1.4;
				font-weight: 700;
				text-transform: uppercase;
			}

			.heading-section .subheading {
				margin-bottom: 20px !important;
				display: inline-block;
				font-size: 13px;
				text-transform: uppercase;
				letter-spacing: 2px;
				color: rgba(0, 0, 0, .4);
				position: relative;
			}

			.heading-section .subheading::after {
				position: absolute;
				left: 0;
				right: 0;
				bottom: -10px;
				content: '';
				width: 100%;
				height: 2px;
				background: #0d0cb5;
				margin: 0 auto;
			}

			.heading-section-white {
				color: rgba(255, 255, 255, .8);
			}

			.heading-section-white h2 {
				font-family:
					line-height: 1;
				padding-bottom: 0;
			}

			.heading-section-white h2 {
				color: #ffffff;
			}

			.heading-section-white .subheading {
				margin-bottom: 0;
				display: inline-block;
				font-size: 13px;
				text-transform: uppercase;
				letter-spacing: 2px;
				color: rgba(255, 255, 255, .4);
			}


			.icon {
				text-align: center;
			}

			.icon img {}


			/*SERVICES*/
			.services {
				background: rgba(0, 0, 0, .03);
			}

			.text-services {
				padding: 10px 10px 0;
				text-align: center;
			}

			.text-services h3 {
				font-size: 16px;
				font-weight: 600;
			}

			.services-list {
				padding: 0;
				margin: 0 0 20px 0;
				width: 100%;
				float: left;
			}

			.services-list img {
				float: left;
			}

			.services-list .text {
				width: calc(100% - 60px);
				float: right;
			}

			.services-list h3 {
				margin-top: 0;
				margin-bottom: 0;
			}

			.services-list p {
				margin: 0;
			}

			/*BLOG*/
			.text-services .meta {
				text-transform: uppercase;
				font-size: 14px;
			}

			/*TESTIMONY*/
			.text-testimony .name {
				margin: 0;
			}

			.text-testimony p {
				font-size: 20px;
				font-weight: 400;
				line-height: 28px;
				text-align: left;
			}

			.text-testimony .position {
				color: rgba(0, 0, 0, .3);

			}


			/*VIDEO*/
			.img {
				width: 100%;
				height: auto;
				position: relative;
			}

			.img .icon {
				position: absolute;
				top: 50%;
				left: 0;
				right: 0;
				bottom: 0;
				margin-top: -25px;
			}

			.img .icon a {
				display: block;
				width: 60px;
				position: absolute;
				top: 0;
				left: 50%;
				margin-left: -25px;
			}



			/*COUNTER*/
			.counter {
				width: 100%;
				position: relative;
				z-index: 0;
			}

			.counter .overlay {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				content: '';
				width: 100%;
				background: #000000;
				z-index: -1;
				opacity: .3;
			}

			.counter-text {
				text-align: center;
			}

			.counter-text .num {
				display: block;
				color: #ffffff;
				font-size: 34px;
				font-weight: 700;
			}

			.counter-text .name {
				display: block;
				color: rgba(255, 255, 255, .9);
				font-size: 13px;
			}

			@media screen and (max-width: 500px) {

				.icon {
					text-align: left;
				}

				.text-services {
					padding-left: 0;
					padding-right: 20px;
					text-align: left;
				}

			}
		</style>
		<style>
			.img-text-box {
				display: inline-block;
				margin: 20px;
				width: 45%;
			}

			.img-text-box div {
				display: inline-grid;
				vertical-align: middle;
				margin: 10px;
			}

			.img-text-box div:last-child {
				width: 50%;
			}

			h2.hero-heading {
				font-size: 92px !important;
				line-height: 112px !important;
				font-weight: 600 !important;
			}

			h3.score-heading {
				font-size: 58px;
				line-height: 64px;
				font-weight: 600;
				margin-bottom: 30px;
			}

			h2.price-heading {
				font-size: 48px !important;
				line-height: 56px !important;
				font-weight: 400 !important;
			}

			h2.unlock-heading {
				font-size: 58px !important;
				line-height: 64px !important;
				font-weight: 600 !important;
			}

			.cover {
				top: 574px !important;
			}

			.desktop {
				display: block !important;
			}

			.mobile {
				display: none !important;
			}

			@media screen and (max-width: 768px) {
				.desktop {
					display: block !important;
				}

				h2.hero-heading {
					font-size: 58px !important;
					line-height: 64px !important;
					font-weight: 600 !important;
					margin-top: 20px !important;
					margin-bottom: 30px !important;
				}

				h3.score-heading {
					font-size: 38px !important;
					line-height: 48px !important;
					font-weight: 600 !important;
					margin-bottom: 0px !important;
				}

				h2.price-heading {
					font-size: 26px !important;
					line-height: 32px !important;
					font-weight: 400 !important;
				}

				h2.unlock-heading {
					font-size: 38px !important;
					line-height: 48px !important;
					font-weight: 600 !important;
				}

				.schore-text {
					font-size: 14px !important;
				}

				.text-testimony p {
					font-size: 16px !important;
				}
			}


			@media screen and (max-width: 450px) {
				.desktop {
					display: none !important;
				}

				.mobile {
					display: block !important;
				}

				.logo img {
					width: 100px !important;
				}

				.text {
					padding: 0px !important;
				}

				.text p {
					font-size: 16px !important;
					line-height: 24px !important;
					margin-left: 0px !important;
					margin-bottom: 0px !important;
					padding: 0px 10px !important;
				}

				.logo a {
					font-size: 16px !important;
				}

				.hero-table {
					height: 344px !important;
					margin: 20px !important;
				}

				h2.hero-heading {
					font-size: 38px !important;
					line-height: 48px !important;
					font-weight: 600 !important;
					margin-top: 20px !important;
					margin-bottom: 10px !important;
				}

				h2.name-heading {
					font-size: 26px !important;
					line-height: 32px in !important;
				}

				h3.score-heading {
					font-size: 32px !important;
					line-height: 40px !important;
					font-weight: 600 !important;
					margin-bottom: 0px !important;
					margin: 10px 0px !important;
				}

				.convered-img {
					margin-top: 80px !important;
				}

				.cover {
					top: 586px !important;
				}

				.heading-section-white {
					padding: 0px !important;
				}

				h2.price-heading {
					font-size: 26px !important;
					line-height: 32px !important;
					font-weight: 400 !important;
				}

				h2.unlock-heading {
					font-size: 18px !important;
					line-height: 24px !important;
					font-weight: 600 !important;
					padding-top: 15px;
				}

				.schore-text {
					font-size: 14px !important;
				}

				.text-testimony p {
					font-size: 16px !important;
					text-align: center !important;
				}

				.img-text-box {
					width: 90% !important;
				}

				.img-text-box div:last-child {
					width: 100% !important;
				}

				.btn.btn-white-outline {
					width: 75% !important;
				}

				.email-section {
					padding: 0px !important;
				}
			}
		</style>


	</head>

	<body width="100%"
		style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;">
		<center style="width: 100%; background-color: #f1f1f1;">
			<div
				style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
				&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
			</div>
			<div style="max-width: 1440px; margin: 0 auto; height: 815px;" class="email-container">
				<!-- BEGIN BODY -->
				<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
					style="margin: auto;">
					<tr>
						<td valign="top" class="bg_white"
							style="padding: 0em 2.5em; height: 80px;     vertical-align: middle;">
							<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
								<tr>
									<td width="40%" class="logo" style="text-align: left;">
										<a style="font-size: 20px;" href="#">
											<img src="https://res.cloudinary.com/diiohnshc/image/upload/v1705208445/Glo-Raise/aggswe05pwwblm1d5pwv.png" </a>
									</td>
									<td width="60%" class="logo" style="text-align: right;">
										<ul class="navigation">
											<li><a href="#"
													style=" font-size: 20px; line-height: 28px; font-weight: 400;">GROWTH
													Assessment</a></li>
										</ul>
									</td>
								</tr>
							</table>
						</td>
					</tr><!-- end tr -->
					<tr>
						<td valign="middle" class="hero bg_white"
							style="background-image: url("https://res.cloudinary.com/diiohnshc/image/upload/v1705208481/Glo-Raise/rld2rlq7oatvz41elabl.png"); background-size: cover; height: 400px;">
							<div class="overlay"></div>
							<table>
								<tr>
									<td>
										<div class="text"
											style="padding: 0 3em; text-align: center; padding-top: 65px;">
											<h2 class="hero-heading">
												Congratulations</h2>
											<h2 class="name-heading"
												style="font-size: 48px; line-height: 56px; font-weight: 400;">John Smith
											</h2>
											<p
												style="font-size: 20px; line-height: 28px; font-weight: 400; margin-bottom: 50px;">
												on completing the Glo-raise GROWTH assessment<br />
												– the premier business attractiveness assessment globally.</p>

											<table class="hero-table desktop"
												style="border-collapse: collapse; border-radius: 10px;">
												<tr>
													<td class="text-testimony heading-section-white"
														style="text-align: center; vertical-align: top; padding-top: 40px;">
														<h3 class="score-heading">
															Your score is</h3>
														<p class="schore-text"
															style="    margin-left: 50px; font-size: 16px; line-height: 24px; color: black; padding:0px;">
															Scores range from Level 1 (lowest) to Level 5 (highest) with
															Level 5 most closely aligning with the factors known to
															drive entrepreneurial success.</p>
													</td>
													<td>
														<img src="../img/One.png">
													</td>

												</tr>
											</table>
											<table style="display: none" class="hero-table mobile">
												<tbody>
													<tr>
														<td>
															<h3 class="score-heading">Your score is</h3>
															<img src="../img/one-horizental.png">
															<p class="schore-text"
																style="    margin-left: 50px; font-size: 16px; line-height: 24px; color: black; padding:0px;">
																Scores range from Level 1 (lowest) to Level 5 (highest)
																with
																Level 5 most closely aligning with the factors known to
																drive entrepreneurial success.</p>
														</td>
													</tr>
												</tbody>

										</div>

			</div>
			</td>
			</tr>
			</table>
			<img class="desktop" style="position: absolute; z-index: -1;	margin-top: -379px;	left: -30px;"
				src="../img/Vector-54.png" />
			<img class="mobile" style="position: absolute; z-index: -1;	width: 100%;margin-top: -100px;"
				src="../img/Vector-full-54 (1).png" />
			</td>
			</tr><!-- end tr -->
			</table>
			</div>
			<div class="convered-img" style="height: 620px; overflow: hidden;     filter: blur(5px);">
				<img src="../img/Blur.png" style="width: 100%;" />
			</div>
			<div class="cover" style=" position: absolute; top: 657px; left: -1px; opacity: 0.95;"
				class="email-container">
				<table>
					<tr>
						<td>
							<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">


								<tr>
									<td class="blur email-section" style="text-align:center;">
										<div class="heading-section heading-section-white"
											style="text-align: center; padding: 0 30px;">
											<h2 class="unlock-heading">
												Unlock your complete Glo-raise GROWTH™ score</h2>

										</div>
										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape1.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">

												<p>visualization breakdown of the % of founders per region</p>
											</div>
										</div>

										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape3.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">
												<p>examples of eventual unicorns from each level</p>

											</div>
										</div>

										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape4.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">
												<p>personalized action report based on your responses to help you drive
													next-level GROWTH</p>

											</div>
										</div>

										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape2.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">

												<p>overall level for all founders globally and the % of founders scoring
													in each level</p>
											</div>
										</div>
										<div class="heading-section heading-section-white">
											<h2 class="price-heading">limited time just $29 ($300 value)</h2>
											<p><a href="#" class="btn btn-white-outline"
													style="font-size: 20px; line-height: 28px; font-weight: 400;">Unlock</a>
											</p>
										</div>
									</td>
								</tr>
							</table>

						</td>
					</tr><!-- end:tr -->
					<!-- 1 Column Text + Button : END -->
				</table>
			</div>
			</div>

		</center>
	</body>

</html>`;
};
export const onePrem = ({ name }) => {
  return `<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
	xmlns:o="urn:schemas-microsoft-com:office:office">

	<head>
		<meta charset="utf-8"> <!-- utf-8 works for most cases -->
		<meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<!-- Use the latest (edge) version of IE rendering engine -->
		<meta name="x-apple-disable-message-reformatting"> <!-- Disable auto-scale in iOS 10 Mail entirely -->
		<title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->

		<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">

		<!-- CSS Reset : BEGIN -->
		<style>
			html,
			body {
				margin: 0 auto !important;
				padding: 0 !important;
				height: 100% !important;
				width: 100% !important;
				background: #f1f1f1;
			}

			/* What it does: Stops email clients resizing small text. */
			* {
				-ms-text-size-adjust: 100%;
				-webkit-text-size-adjust: 100%;
			}

			/* What it does: Centers email on Android 4.4 */
			div[style*="margin: 16px 0"] {
				margin: 0 !important;
			}

			/* What it does: Stops Outlook from adding extra spacing to tables. */
			table,
			td {
				mso-table-lspace: 0pt !important;
				mso-table-rspace: 0pt !important;
			}

			/* What it does: Fixes webkit padding issue. */
			table {
				border-spacing: 0 !important;
				border-collapse: collapse !important;
				table-layout: fixed !important;
				margin: 0 auto !important;
			}

			/* What it does: Uses a better rendering method when resizing images in IE. */
			img {
				-ms-interpolation-mode: bicubic;
			}

			/* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
			a {
				text-decoration: none;
			}

			/* What it does: A work-around for email clients meddling in triggered links. */
			*[x-apple-data-detectors],
			/* iOS */
			.unstyle-auto-detected-links *,
			.aBn {
				border-bottom: 0 !important;
				cursor: default !important;
				color: inherit !important;
				text-decoration: none !important;
				font-size: inherit !important;
				font-family: inherit !important;
				font-weight: inherit !important;
				line-height: inherit !important;
			}

			/* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
			.a6S {
				display: none !important;
				opacity: 0.01 !important;
			}

			/* What it does: Prevents Gmail from changing the text color in conversation threads. */
			.im {
				color: inherit !important;
			}

			/* If the above doesn't work, add a .g-img class to any image in question. */
			img.g-img+div {
				display: none !important;
			}

			/* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
			/* Create one of these media queries for each additional viewport size you'd like to fix */

			/* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
			@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
				u~div .email-container {
					min-width: 320px !important;
				}
			}

			/* iPhone 6, 6S, 7, 8, and X */
			@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
				u~div .email-container {
					min-width: 375px !important;
				}
			}

			/* iPhone 6+, 7+, and 8+ */
			@media only screen and (min-device-width: 414px) {
				u~div .email-container {
					min-width: 414px !important;
				}
			}
		</style>

		<!-- CSS Reset : END -->

		<!-- Progressive Enhancements : BEGIN -->
		<style>
			.bg_white {
				background: #ffffff;
			}

			/*BUTTON*/
			.btn {
				padding: 5px 15px;
				display: inline-block;
			}

			.btn.btn-primary {
				border-radius: 5px;
				background: #0d0cb5;
				color: #ffffff;
			}

			.btn.btn-white {
				border-radius: 5px;
				background: #ffffff;
				color: #000000;
			}

			.btn.btn-white-outline {
				border-radius: 5px;
				background: #CAFF87;
				border: 1px solid #fff;
				color: black;
				padding: 24px 36px;
			}

			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				font-family: 'Poppins', sans-serif;
				color: #000000;
				margin-top: 0;
			}

			body {
				font-family: 'Poppins', sans-serif;
				font-weight: 400;
				font-size: 15px;
				line-height: 1.8;
				color: rgba(0, 0, 0, .4);
			}

			a {
				color: #0d0cb5;
			}

			table {}

			.box-table {
				max-width: 560px;
			}

			.hero-table {
				max-width: 838px;
				height: 250px;
			}

			.hero-table td {
				background-color: white;
			}

			.box-table td:first-child {
				width: 180px;
			}

			/*LOGO*/

			.logo h1 {
				margin: 0;
			}

			.logo h1 a {
				color: #000000;
				font-size: 20px;
				font-weight: 700;
				text-transform: uppercase;
				font-family: 'Poppins', sans-serif;
			}

			.navigation {
				padding: 0;
			}

			.navigation li {
				list-style: none;
				display: inline-block;
				;
				margin-left: 5px;
				font-size: 13px;
				font-weight: 500;
			}

			.navigation li a {
				color: rgba(0, 0, 0, .4);
			}

			/*HERO*/
			.hero {
				position: relative;
				z-index: 0;
			}

			.hero .overlay {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				content: '';
				width: 100%;
				background: #02B68A;
				z-index: -1;
				height: 735px;
			}

			.hero .icon {}

			.hero .icon a {
				display: block;
				width: 60px;
				margin: 0 auto;
			}

			.hero .text {
				color: rgba(255, 255, 255, .8);
			}

			.hero .text h2 {
				color: #ffffff;
				margin-bottom: 0;
			}


			/*HEADING SECTION*/
			.heading-section {}

			.heading-section h2 {
				color: #000000;
				font-size: 20px;
				margin-top: 0;
				line-height: 1.4;
				font-weight: 700;
				text-transform: uppercase;
			}

			.heading-section .subheading {
				margin-bottom: 20px !important;
				display: inline-block;
				font-size: 13px;
				text-transform: uppercase;
				letter-spacing: 2px;
				color: rgba(0, 0, 0, .4);
				position: relative;
			}

			.heading-section .subheading::after {
				position: absolute;
				left: 0;
				right: 0;
				bottom: -10px;
				content: '';
				width: 100%;
				height: 2px;
				background: #0d0cb5;
				margin: 0 auto;
			}

			.heading-section-white {
				color: rgba(255, 255, 255, .8);
			}

			.heading-section-white h2 {
					line-height: 1;
				padding-bottom: 0;
			}

			.heading-section-white h2 {
				color: #ffffff;
			}

			.heading-section-white .subheading {
				margin-bottom: 0;
				display: inline-block;
				font-size: 13px;
				text-transform: uppercase;
				letter-spacing: 2px;
				color: rgba(255, 255, 255, .4);
			}


			.icon {
				text-align: center;
			}

			.icon img {}


			/*SERVICES*/
			.services {
				background: rgba(0, 0, 0, .03);
			}

			/*TESTIMONY*/
			.text-testimony .name {
				margin: 0;
			}

			.text-testimony p {
				font-size: 20px;
				font-weight: 400;
				line-height: 28px;
				text-align: left;
			}

			.text-testimony .position {
				color: rgba(0, 0, 0, .3);

			}


			/*VIDEO*/
			.img {
				width: 100%;
				height: auto;
				position: relative;
			}

			.img .icon {
				position: absolute;
				top: 50%;
				left: 0;
				right: 0;
				bottom: 0;
				margin-top: -25px;
			}

			.img .icon a {
				display: block;
				width: 60px;
				position: absolute;
				top: 0;
				left: 50%;
				margin-left: -25px;
			}

			.percentage_box .p_box {
				display: table-cell;
				font-size: 38px;
				line-height: 48px;
				font-weight: 600;
				text-align: left;
			}

			.p_box div {
				text-align: center;
			}

			@media screen and (max-width: 500px) {

				.icon {
					text-align: left;
				}

			}
		</style>
		<style>
			.section_box {
				width: 49%;
				display: inline-block;
				text-align: left;
			}

			.tab-box {
				padding: 10px;
				margin-bottom: 20px;
			}

			.tab-box div {
				display: inline-block;
				width: 40%;
			}

			.tab-box div:first-child {
				width: 29%;
			}

			.tab-box div:last-child {
				width: 29%;
			}

			.tab-box div:first-child {
				text-align: left;
			}

			.tab-box div:last-child {
				text-align: right;
			}

			.social-icons img {
				margin: 3%;
				cursor: pointer;
			}

			.social-icons img:hover {
				opacity: 0.8;
			}

			#myBtn:hover {
				opacity: 0.7;
			}

			h2.hero-heading {
				font-size: 92px !important;
				line-height: 112px !important;
				font-weight: 600 !important;
			}

			h3.score-heading {
				font-size: 58px;
				line-height: 64px;
				font-weight: 600;
				margin-bottom: 30px;
			}

			.responsive-width,
			.responsive-width-imp-business {
				width: 85%;
			}

			.responsive-width-85 {
				width: 85%;
			}

			.text-unicorn-heading {
				font-size: 58px;
				line-height: 64px;
				font-weight: 600;
			}

			.text-unicorn {
				font-size: 48px;
				line-height: 56px;
				font-weight: 400;
				margin-bottom: 5px;
			}

			.text-unicorn-desc {
				font-size: 20px;
				line-height: 28px;
				font-weight: 400;
			}

			.text-improve-business {
				font-size: 58px;
				line-height: 64px;
				font-weight: 600;
			}

			.text-building-business {
				font-size: 58px;
				line-height: 64px;
				font-weight: 600;
			}

			.text-building-business-desc {
				width: 75% !important;
			}

			.text-know-others {
				font-size: 58px;
				line-height: 64px;
				font-weight: 600;
			}


			.desktop {
				display: block !important;
			}

			.desktop-flex {
				display: flex !important;
			}

			.mobile {
				display: none !important;
			}

			.table-personlized td:first-child {
				width: 50px !important;
			}

			.footer-table .left,
			.footer-table .right {
				width: 49%;
				display: inline-block;
			}

			.footer-table .left {
				text-align: left;
			}

			@media screen and (max-width: 768px) {
				.desktop {
					display: block !important;
				}

				.desktop-flex {
					display: flex !important;
				}

				h2.hero-heading {
					font-size: 58px !important;
					line-height: 64px !important;
					font-weight: 600 !important;
					margin-top: 20px !important;
					margin-bottom: 30px !important;
				}

				h3.score-heading {
					font-size: 38px !important;
					line-height: 48px !important;
					font-weight: 600 !important;
					margin-bottom: 0px !important;
				}

				h2.price-heading {
					font-size: 26px !important;
					line-height: 32px !important;
					font-weight: 400 !important;
				}

				h2.unlock-heading {
					font-size: 38px !important;
					line-height: 48px !important;
					font-weight: 600 !important;
				}

				.schore-text {
					font-size: 14px !important;
				}

				.text-testimony p {
					font-size: 16px !important;
				}

				.responsive-width {
					width: 92% !important;
				}

				.responsive-width-imp-business {
					width: 90% !important;
				}

				.responsive-width-85 {
					width: 100% !important;
				}

				.arrow-down-image img {
					width: 80px !important;
					height: 115px !important;
				}

				.text-improve-business {
					font-size: 38px;
					line-height: 48px;
				}

				.text-building-business {
					font-size: 38px !important;
					line-height: 48px !important;
				}

				.text-building-business-desc {
					width: 90% !important;
				}

				.text-building-business-desc p {
					font-size: 20px !important;
					line-height: 28px !important;
				}

				.text-know-others {
					font-size: 38px !important;
					line-height: 48px !important;
					font-weight: 600;
				}

				.sun-question {
					display: none !important;
				}

				.text-personalized {
					padding-left: 30px !important;
					width: 85% !important;
					margin-top: -102px !important;
					margin-bottom: 40px !important;
				}

				.table-personlized td:first-child {
					font-size: 32px !important;
					line-height: 37px !important;
				}

				.text-unicorn {
					font-size: 32px !important;
					line-height: 37px !important;
				}

				.section_box,
				.section_box img {
					width: 100% !important;
				}

				.percentage_box .p_box {
					font-size: 24px !important;
					line-height: 30px !important;
				}

				.progress-box {
					margin-bottom: 70px;
				}

				.tab-box div:last-child img {
					width: 150px;
				}

				.img-width-114 {
					width: 114px !important;
				}

				.img-width-124 {
					width: 124px !important;
				}

				.footer-table p:first-child {
					font-size: 12px !important;
				}

				.footer-table p:last-child {
					font-size: 10px !important;
				}

				.desktop-flex .p_box span {
					text-align: left;
					font-size: 14px !important;
				}
			}


			@media screen and (max-width: 450px) {
				.desktop {
					display: none !important;
				}

				.desktop-flex {
					display: none !important;
				}

				.mobile {
					display: block !important;
				}

				.logo img {
					width: 100px !important;
				}

				.text {
					padding: 0px !important;
				}

				.text p {
					font-size: 16px !important;
					line-height: 24px !important;
					margin-left: 0px !important;
					margin-bottom: 0px !important;
					padding: 0px 10px !important;
				}

				.logo a {
					font-size: 16px !important;
				}

				.hero-table {
					height: 430px !important;
					margin: 20px !important;
				}

				h2.hero-heading {
					font-size: 38px !important;
					line-height: 48px !important;
					font-weight: 600 !important;
					margin-top: 40px !important;
					margin-bottom: 10px !important;
				}

				h2.name-heading {
					font-size: 26px !important;
					line-height: 32px in !important;
				}

				h3.score-heading {
					font-size: 32px !important;
					line-height: 40px !important;
					font-weight: 600 !important;
					margin-bottom: 0px !important;
					margin: 10px 0px !important;
				}

				.convered-img {
					margin-top: 80px !important;
				}

				.cover {
					top: 586px !important;
				}

				.heading-section-white {
					padding: 0px !important;
				}

				h2.price-heading {
					font-size: 26px !important;
					line-height: 32px !important;
					font-weight: 400 !important;
				}

				h2.unlock-heading {
					font-size: 18px !important;
					line-height: 24px !important;
					font-weight: 600 !important;
					padding-top: 15px;
				}

				.schore-text {
					font-size: 14px !important;
				}

				.text-testimony p {
					font-size: 16px !important;
					text-align: center !important;
				}

				.img-text-box {
					width: 90% !important;
				}

				.img-text-box div:last-child {
					width: 100% !important;
				}

				.btn.btn-white-outline {
					width: 75% !important;
				}

				.email-section {
					padding: 0px !important;
				}

				.mobile-progress-box {
					display: list-item;
					height: 32px;
					padding: 0px 6px;
					padding-top: 5px;
				}

				.text-unicorn-heading {
					font-size: 38px;
					line-height: 48px;
				}

				.text-unicorn {
					font-size: 26px !important;
					line-height: 32px !important;
				}

				.text-unicorn-desc {
					font-size: 16px !important;
					line-height: 24px !important;
				}

				.section_box .heading {
					font-size: 32px !important;
					line-height: 40px !important;
				}

				.secion_para p {
					font-size: 16px !important;
					line-height: 24px !important;
				}

				.arrow-down-image img {
					width: 46px !important;
					height: 66px !important;
				}

				.text-personalized .heading {
					font-size: 38px !important;
					line-height: 48px !important;
				}

				.text-personalized-desc {
					font-size: 16px !important;
					line-height: 24px !important;
				}

				.text-personalized {
					width: 95% !important;
					padding-left: 0px !important;
				}

				table.table-personlized th:nth-child(2),
				table.table-personlized td:nth-child(2) {
					display: none;
				}

				.table-personlized td:first-child {
					width: 50px !important;
					vertical-align: top !important;
				}

				.text-improve-business {
					font-size: 32px !important;
					line-height: 40px !important;
				}

				.tab-box div:first-child {
					width: 50% !important;
					float: left !important;
				}

				.tab-box div {
					width: 100% !important;
				}

				.tab-box div img {
					width: 74px !important;

				}

				.tab-box div:last-child {
					width: 50% !important;
					float: right !important;
					margin-top: -320px !important;
				}

				.img-right-top {
					margin-top: -400px !important;
				}

				.text-know-others {
					font-size: 32px !important;
					line-height: 40px !important;
				}

				.footer-table .left,
				.footer-table .right {
					width: 100% !important;
					display: block;
				}

				.footer-table .right {
					text-align: center !important;
					display: flex !important;
				}

				.text-building-business {
					font-size: 32px !important;
					line-height: 40px !important;
				}

				div.text-building-business-desc {
					width: 100% !important;
					margin-top: 0xp !important;
				}

				.tab-box-mob img {
					width: 50px !important;
				}

				.tab-box-mob.mobile div {
					display: inline-block;
					vertical-align: middle !important;
					display: table-cell !important;
				}
			}
		</style>

	</head>

	<body width="100%"
		style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;">
		<center style="width: 100%; background-color: #f1f1f1;">
			<div
				style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
				&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
			</div>
			<div style=" margin: 0 auto; height: 815px;" class="email-container">
				<!-- BEGIN BODY -->
				<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
					style="margin: auto;">
					<tr>
						<td valign="top" class="bg_white"
							style="padding: 0em 2.5em; height: 80px;     vertical-align: middle;">
							<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
								<tr>
									<td width="40%" class="logo" style="text-align: left;">
										<a style="font-size: 20px;" href="#">
											<img src="../img/Logo.png" </a>
									</td>
									<td width="60%" class="logo" style="text-align: right;">
										<ul class="navigation">
											<li><a href="#"
													style=" font-size: 20px; line-height: 28px; font-weight: 400;">GROWTH
													Assessment</a></li>
										</ul>
									</td>
								</tr>
							</table>
						</td>
					</tr><!-- end tr -->
					<tr>
						<td valign="middle" class="hero bg_white"
							style="background-image: url(../images/bg_1.jpg); background-size: cover; height: 400px;">
							<div class="overlay"></div>
							<table>
								<tr>
									<td>
										<div class="text"
											style="padding: 0 3em; text-align: center; padding-top: 65px;">
											<h2 class="hero-heading">
												Congratulations</h2>
											<h2 class="name-heading"
												style="font-size: 48px; line-height: 56px; font-weight: 400;">John Smith
											</h2>
											<p
												style="font-size: 20px; line-height: 28px; font-weight: 400; margin-bottom: 50px;">
												on completing the Glo-raise GROWTH assessment<br />
												– the premier business attractiveness assessment globally.</p>


											<table class="hero-table desktop"
												style="border-collapse: collapse; border-radius: 10px;">
												<tr>
													<td class="text-testimony heading-section-white"
														style="text-align: center; vertical-align: top; padding-top: 40px;">
														<h3 class="score-heading">
															Your score is</h3>
														<p class="schore-text"
															style="    margin-left: 50px; font-size: 16px; line-height: 24px; color: black; padding:0px;">
															Scores range from Level 1 (lowest) to Level 5 (highest) with
															Level 5 most closely aligning with the factors known to
															drive entrepreneurial success.</p>
													</td>
													<td>
														<img src="../img/One.png">
													</td>

												</tr>
											</table>
											<table style="display: none" class="hero-table mobile">
												<tbody>
													<tr>
														<td>
															<h3 class="score-heading">Your score is</h3>
															<img src="../img/one-horizental.png">
															<p class="schore-text"
																style="    margin-left: 50px; font-size: 16px; line-height: 24px; color: black; padding:0px;">
																Scores range from Level 1 (lowest) to Level 5 (highest)
																with
																Level 5 most closely aligning with the factors known to
																drive entrepreneurial success.</p>
														</td>
													</tr>
												</tbody>
											</table>

										</div>

									</td>
								</tr>
							</table>
							<img class="desktop"
								style="position: absolute; z-index: -1;	margin-top: -369px;	left: -30px;"
								src="../img/Vector-54.png" />
							<img class="mobile" style="position: absolute; z-index: -1;	width: 100%;margin-top: -185px;"
								src="../img/Vector-full-54 (1).png" />
						</td>
					</tr><!-- end tr -->
				</table>
			</div>

			<div style="background-color: #024F4A; color: white;text-align: center;">
				<div style="display: inline-block;" class="responsive-width">
					<p style="font-size: 58px; line-height: 64px; font-weight: 600;">Global Standing</p>
					<p style="font-size: 20px; line-height: 28px; font-weight: 400;">
						Here is information for all participants globally. You'll see the % of
						founders per region, the overall average score for all founders, and
						the % of founders scoring in each level.
					</p>
					<img src="../img/Map.png" style="width: 100%;" />
					<div style="    text-align: -webkit-center;" class="progress-box">
						<p
							style="font-size: 48px; line-height: 56px; font-weight: 400; width: 180px; height: 180px; border: 5px dashed white; display: flex; align-items: center; justify-content: center; border-radius: 50%; margin-bottom: 15px;">
							Level 2</p>
						<p style="font-size: 20px; line-height: 28px; font-weight: 400; margin-top: 0px;">Average score
							of total founders</p>
						<hr />
						<div class="desktop-flex" class="percentage_box" style="display: flex;">
							<div class="p_box" style="width: 12%;">
								<span style="font-size: 16px; line-height: 24px; font-weight: 400;">Level 2</span>
								<div style="background-color: #02B68A;">12%</div>
							</div>
							<div class="p_box" style="width: 36%;">
								<span style="font-size: 16px; line-height: 24px; font-weight: 400;">Level 3</span>
								<div style="background-color: #CAFF87; color: black;">36%</div>
							</div>
							<div class="p_box" style="width: 31%;">
								<span style="font-size: 16px; line-height: 24px; font-weight: 400;">Level 4</span>
								<div style="background-color: #5A43F0;">31%</div>
							</div>
							<div class="p_box" style="width: 14%;">
								<span style="font-size: 16px; line-height: 24px; font-weight: 400;">Level 5</span>
								<div style="background-color: #C2DEEC;">14%</div>
							</div>
							<div class="p_box" style="width: 7%;">
								<span style="font-size: 16px; line-height: 24px; font-weight: 400;">Level 6</span>
								<div style="background-color: #FD542F;">7%</div>
							</div>
						</div>
						<div class="mobile" class="percentage_box" style="display: flex; margin-top: 20px;">

							<div class="p_box" style="width: 100%;">

								<div class="mobile-progress-box" style="background-color: #FD542F;">
									<span
										style="font-size: 16px; line-height: 24px; font-weight: 400; float: left;">Level
										5</span>
									<span style="float: right;">7%</span>
								</div>
							</div>
							<div class="p_box" style="width: 100%;">

								<div class="mobile-progress-box"
									style="background-color: #C2DEEC;    padding-top: 30px;padding-bottom: 10px; color: black;">
									<span
										style="font-size: 16px; line-height: 24px; font-weight: 400; float: left;">Level
										4</span>
									<span style="float: right;">14%</span>
								</div>
							</div>
							<div class="p_box" style="width: 100%;">

								<div class="mobile-progress-box"
									style="background-color: #5A43F0;    padding-top: 50px;padding-bottom: 25px; color: white;">
									<span
										style="font-size: 16px; line-height: 24px; font-weight: 400; float: left;">Level
										3</span>
									<span style="float: right;">31%</span>
								</div>
							</div>
							<div class="p_box" style="width: 100%;">
								<div class="mobile-progress-box"
									style="background-color: #CAFF87;     padding-top: 60px;padding-bottom: 40px; color: black;">
									<span
										style="font-size: 16px; line-height: 24px; font-weight: 400; float: left;">Level
										2</span>
									<span style="float: right;">36%</span>
								</div>
							</div>
							<div class="p_box" style="width: 100%;">

								<div class="mobile-progress-box"
									style="background-color: #02B68A;     padding-top: 20px;padding-bottom: 15px; color: white;">
									<span
										style="font-size: 16px; line-height: 24px; font-weight: 400; float: left;">Level
										1</span>
									<span style="float: right;">12%</span>
								</div>
							</div>
							<p style=" display: block; font-size: 16px; line-height: 24px; font-weight: 400;">% of
								founders
								scoring in each level</p>
						</div>
						<p class="desktop"
							style=" display: block; font-size: 20px; line-height: 28px; font-weight: 400;">% of founders
							scoring in each level</p>

					</div>
				</div>
			</div>
			<div style="background-color: #C2DEEC; color: black; display: inline-table;">
				<div class="responsive-width" style=" color: #051C09;">
					<p class="text-unicorn-heading">Unicorns from Each Level</p>
					<p class="text-unicorn">Level 5 usually
						requires continuous improvement over time to achieve.</p>
					<p clas="text-unicorn-desc">Here are examples of Unicorns that
						were once below Level 5.</p>
				</div>
			</div>
			<div style="background-color: #C2DEEC; color: black; display: inline-table; padding: 50px 0px;">
				<div class="responsive-width">
					<div style="color: #2E2873; padding-right: 10px;" class="section_box">
						<p class="heading" style="font-size: 38px; line-height: 48px; font-weight: 600;">Level 4 — LYFT
						</p>
						<div class="secion_para" style="font-size: 20px; line-height: 28px; font-weight: 400;">
							<p>Logan Green starts a company called “Zimride” to offer long-distance ride-sharing between
								college campuses. Green got the idea when he was traveling in Zimbabwe and saw locals
								using crowdsourced carpool networks to get around. </p>
							<p>Green was using Greyhound and Craigslist to hitch rides between Santa Barbara,
								California, and Los Angeles to see his girlfriend, and decided to use the ride-sharing
								model to fill up seats. Zimride/Lyft raises $15 million in funding based on its GROWTH
								trajectory and expands regionally then globally.</p>
						</div>
					</div>
					<div class="section_box">
						<img src="../img/paid/lyft.png" />
					</div>
				</div>

			</div>

			<div style="background-color: #E5DFFA; color: black; display: inline-table; padding: 50px 0px;">
				<div style="width: 85%;">
					<div class="section_box">
						<img src="../img/paid/rappi.png" />
					</div>
					<div style="color: #2E2873; padding-left: 10px;" class="section_box">
						<p class="heading" style="font-size: 38px; line-height: 48px; font-weight: 600;">Level 3 — RAPPI
						</p>
						<div class="secion_para" style="font-size: 20px; line-height: 28px; font-weight: 400;">
							<p>The app was seen as a digital pantry store and a small group of people promoted it by
								giving away donuts in exchange for downloads. Then, its big differentiator was to
								include the "Rappi Antojo" button and with this option, anyone with the app could order
								anything. </p>
						</div>
					</div>

				</div>

			</div>
			<div style="background-color: #F4D4D5; color: black; display: inline-table; padding: 50px 0px;">
				<div style="width: 85%;">

					<div style="color: #2E2873; padding-right: 10px;" class="section_box">
						<p class="heading" style="font-size: 38px; line-height: 48px; font-weight: 600;">
							Level 2 — AirBNB
						</p>
						<div class="secion_para" style="font-size: 20px; line-height: 28px; font-weight: 400;">
							<p>Long before Airbnb persuaded strangers to sleep in one another's homes and became a 31
								billion company, it was just an idea to earn a bit of extra money to make rent. </p>
							<p>
								After their first guests, Airbnb's founders realized they were on to something bigger
								than a stopgap for rent. They faced rejection plenty of times — and created their own
								version of Obama O's cereal — but the three founders of Airbnb have built a big business
								in the past nine years.
							</p>
						</div>
					</div>
					<div class="section_box">
						<img src="../img/paid/AirBNP.png" />
					</div>

				</div>

			</div>

			<div style="background-color: #E5DFFA; color: black; display: inline-table; padding: 50px 0px;">
				<div style="width: 85%;">
					<div class="section_box">
						<img src="../img/paid/canva.png" />
					</div>
					<div style="color: #2E2873; padding-left: 10px;" class="section_box">
						<p class="heading" style="font-size: 38px; line-height: 48px; font-weight: 600;">
							Level 1 — Canva </p>
						<div class="secion_para" style="font-size: 20px; line-height: 28px; font-weight: 400;">
							<p>Founder Melanie Perkins was told “no” by more than 100 investors over several years while
								continuously improving her offering — before securing funding.  </p>
						</div>
					</div>

				</div>

			</div>
			<div style="background-color: #F8F8F8; color: white; display: inline-table; padding: 50px 0px;">
				<div class="responsive-width-85">
					<div class="arrow-down-image" style="width: 18%; display: inline-block; float: left;">
						<img src="../img/paid/arrow-down.png" />
					</div>
					<div class="text-personalized"
						style="color: #2E2873; padding-left: 10px;width: 60%; display: inline-block;">
						<p class="heading" style="font-size: 58px; line-height: 64px; font-weight: 600;">
							Personalized Insights </p>
						<div style="font-size: 20px; line-height: 28px; font-weight: 400;">
							<p class="text-personalized-desc">Here's each question and important insights related to why
								each one matters for you.</p>
						</div>
					</div>
					<div class="sun-question" style="width: 18%; display: inline-block; float: right;">
						<img src="../img/paid/circle-question.png" />
					</div>

					<div>
						<table class="table-personlized" cellpadding="10"
							style="width: 100%; color: black; text-align: left; font-size: 16px; line-height: 24px; font-weight: 400;">
							<thead>
								<tr>
									<th style="width: 10%;">#</th>
									<th>Question</th>
									<th>Why This Matters For You</th>
								</tr>
							</thead>
							<tbody>
								<tr
									style="background-color: white;   border-bottom: 8px solid #F8F8F8; border-radius: 5px;">
									<td>1</td>
									<td>Our business is in this stage</td>
									<td>
										<h4 class="mobile">Our business is in this stage</h4>
										Founders should focus on funding partners whos strategy aligns with their
										development stage
									</td>
								</tr>
								<tr style="background-color: white;">
									<td>2</td>
									<td>We are in headquarterd in</td>
									<td>
										<h4 class="mobile">We are in headquarterd in</h4>
										Founders should focus on funding partners whos strategy aligns with their
										development stage
									</td>
								</tr>
								<tr style="background-color: white;">
									<td>3</td>
									<td>We are in headquarterd in</td>
									<td>
										<h4 class="mobile">We are in headquarterd in</h4>
										Founders should focus on funding partners whos strategy aligns with their
										development stage
									</td>
								</tr>
								<tr style="background-color: white;">
									<td>4</td>
									<td>We are in headquarterd in</td>
									<td>
										<h4 class="mobile">We are in headquarterd in</h4>
										Founders should focus on funding partners whos strategy aligns with their
										development stage
									</td>
								</tr>
								<tr style="background-color: white;">
									<td>5</td>
									<td>We are in headquarterd in</td>
									<td>
										<h4 class="mobile">We are in headquarterd in</h4>
										Founders should focus on funding partners whos strategy aligns with their
										development stage
									</td>
								</tr>
							</tbody>
						</table>
						<button
							style="background-color: #2E2873; width: 179px; height: 76px; color: white; border-radius: 5px; margin: 10px; outline: auto; cursor: pointer;">See
							all</button>
					</div>
				</div>

			</div>

			<div style="background-color: #051C09; color: white; display: inline-table; padding: 50px 0px;">
				<div class="responsive-width-imp-business">
					<p class="text-improve-business">Here are suggested actions specific
						to your current level that you can do right now to improve your business</p>

					<div style="background-color: #CAFF87; color: black;" class="tab-box">
						<div style="vertical-align: top;">
							<p style="font-size: 20px; line-height: 28px; font-weight: 400;">
								<span style="font-size: 58px; line-height: 64px; font-weight: 600;">G</span>roup
							</p>
							<p style="font-size: 20px; line-height: 28px; font-weight: 600;">Leadership Team</p>
						</div>
						<div style="text-align: left;">
							<p>1. Identify complementary strengths needed to improve your founding team.</p>
							<p>2. Identify how to concentrate your focus on growing the business.</p>
						</div>
						<div style="vertical-align: bottom;"><img src="../img/paid/Group 52.png" /></div>
					</div>

					<div style="background-color: #E5DFFA; color: black;" class="tab-box">
						<div style="vertical-align: top;">
							<p style="font-size: 20px; line-height: 28px; font-weight: 400;">
								<span style="font-size: 58px; line-height: 64px; font-weight: 600;">R</span>evenue
							</p>
							<p style="font-size: 20px; line-height: 28px; font-weight: 600;">Commercialization Model</p>
						</div>
						<div style="text-align: left;">
							<p>1. Determine which customer types are more profitable for you to serve.</p>
							<p>2. Reinvent your business model to improve its economic prospects.</p>
						</div>
						<div style="vertical-align: bottom;"><img src="../img/paid/Group 2530.png" /></div>
					</div>

					<div style="background-color: #C2DEEC; color: black;" class="tab-box">
						<div style="vertical-align: top;">
							<p style="font-size: 20px; line-height: 28px; font-weight: 400;">
								<span style="font-size: 58px; line-height: 64px; font-weight: 600;">O</span>pportunity
							</p>
							<p style="font-size: 20px; line-height: 28px; font-weight: 600;">Size of the Market Prize
							</p>
						</div>
						<div style="text-align: left;">
							<p>1. Rethink the attractiveness of your market.</p>
							<p>2. Pursue a more attractive market segment if scalability is desired.</p>
						</div>
						<div style="vertical-align: bottom;"><img src="../img/paid/Group 2521.png" /></div>
					</div>

					<div style="background-color: #FFFFFF; color: black;" class="tab-box">
						<div style="vertical-align: top;">
							<p style="font-size: 20px; line-height: 28px; font-weight: 400;">
								<span style="font-size: 58px; line-height: 64px; font-weight: 600;">W</span>alls
							</p>
							<p style="font-size: 20px; line-height: 28px; font-weight: 600;">Competitive Defenses</p>
						</div>
						<div style="text-align: left;">
							<p>1. Outline the top three local regulations that influence your business.</p>
							<p>2. Identify core intellectual property that is unique to your business and can be
								registered.</p>
						</div>
						<div style="vertical-align: bottom;"><img src="../img/paid/Group 157.png" /></div>
					</div>

					<div style="background-color: #F4D4D5; color: black;" class="tab-box">
						<div style="vertical-align: top;">
							<p style="font-size: 20px; line-height: 28px; font-weight: 400;">
								<span style="font-size: 58px; line-height: 64px; font-weight: 600;">T</span>raction
							</p>
							<p style="font-size: 20px; line-height: 28px; font-weight: 600;">Existing Momentum</p>
						</div>
						<div style="text-align: left;">
							<p>1. Ask a representative sample of customers for candid feedback about what they like,
								dislike, and are ambivalent to regarding your current offering.</p>
							<p>2. Identify three items of social proof that could improve the credibilty of your
								business.</p>
						</div>
						<div class="img-right-top" style="vertical-align: bottom;"><img src="../img/paid/Star 6.png" />
						</div>
					</div>

					<div style="background-color: #EBE6DC; color: black;" class="tab-box">
						<div style="vertical-align: top;">
							<p style="font-size: 20px; line-height: 28px; font-weight: 400;">
								<span style="font-size: 58px; line-height: 64px; font-weight: 600;">H</span>ook
							</p>
							<p style="font-size: 20px; line-height: 28px; font-weight: 600;">Value Fit and
								Distinctiveness</p>
						</div>
						<div style="text-align: left;">
							<p>1. Identify three barriers that could be removed to make it easier for customers to work
								with your business.</p>
							<p>2. Rethink how your offering can be more relevant to customers and differentiated from
								alternatives.</p>
						</div>
						<div class="img-right-top" style="vertical-align: bottom;"><img src="../img/paid/question.png" />
						</div>
					</div>

				</div>

			</div>

			<div style="background-color: #FD542F; color: white;">
				<div>
					<div class="tab-box desktop">
						<div style="vertical-align: bottom; width: 8%; margin-left: -100px;">
							<img class="img-width-114" src="../img/paid/Minimize.png">
						</div>
						<div style="text-align: center; width: 78%;     height: 350px; vertical-align: top;">
							<p class="text-building-business">
								Congratulations on your
								interest in building a business</p>
							<div class="text-building-business-desc">
								<p style=" text-align: center;">We encourage you to implement the suggested GROWTH
									actions and take the assessment again to chart improvement.</p>
							</div>
						</div>
						<div style="vertical-align: top; width: 10%; margin-left: -100px;">
							<img class="img-width-124" src="../img/paid/North East Arrow.png" />
						</div>
					</div>
					<div class="tab-box-mob mobile">
						<div style="vertical-align: bottom; width: 8%; margin-left: -100px;">
							<img class="img-width-114" src="../img/paid/Minimize.png">
						</div>
						<div style="text-align: center; width: 78%;     height: 350px; vertical-align: top;">
							<p class="text-building-business">
								Congratulations on your
								interest in building a business</p>
							<div class="text-building-business-desc">
								<p style=" text-align: center;">We encourage you to implement the suggested GROWTH
									actions and take the assessment again to chart improvement.</p>
							</div>
						</div>
						<div style="vertical-align: top; width: 10%; margin-left: -100px;">
							<img class="img-width-124" src="../img/paid/North East Arrow.png" />
						</div>
					</div>
				</div>
			</div>
			<div style="background-color: #2E2873; color: white; margin-top: -20px;     padding: 50px 0px;">
				<img src="../Icon/Group 2521.png" />
				<p class="text-know-others">Know others who could benefit from this assessment?</p>
				<p style="font-size: 20px; line-height: 28px; font-weight: 400;">Spread the word</p>
				<div class="social-icons">
					<img src="../Icon/Facebook Fill.png" />
					<img src="../Icon/logo 1.png" />
					<img src="../Icon/Instagram Fill.png" />
					<img src="../Icon/email-outline.png" />
				</div>
			</div>
			<div style="background-color: #051C09;     padding: 50px 0px;">
				<img src="../img/Paid/Logo.png" style="width: 160px; height: 30px; margin: 3%;" />
				<div style="color: white; width: 80%;     border-top: 1px solid white;">
					<div class="footer-table" style="width: 100%;">

						<div class="left">
							<p style="font-size: 16px;">Copyright © 2024 Glo-raise. All rights reserved.</p>
							<p style="font-size: 12px;">All trademarks are the property of their respective
								owners.</p>
						</div>
						<div class="right" style="text-align: right;">
							<table style="float: right; cursor: pointer;">
								<tbody>
									<tr onclick="topFunction()" id="myBtn">
										<td style="    font-size: 20px; line-height: 28px; font-weight: 400;">
											Back to top</td>
										<td><img src="../Icon/reload.png" /></td>
									</tr>
								</tbody>
							</table>
						</div>

					</div>
				</div>>
			</div>
			</div>

		</center>

		<script>
			// Get the button
			let mybutton = document.getElementById("myBtn");

			// When the user scrolls down 20px from the top of the document, show the button
			window.onscroll = function () { scrollFunction() };

			function scrollFunction() {
				if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
					mybutton.style.display = "block";
				} else {
					mybutton.style.display = "none";
				}
			}

			// When the user clicks on the button, scroll to the top of the document
			function topFunction() {
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			}
		</script>
	</body>

</html>`;
};
export const twoFree = ({ name }) => {
  return `<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
	xmlns:o="urn:schemas-microsoft-com:office:office">

	<head>
		<meta charset="utf-8"> <!-- utf-8 works for most cases -->
		<meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<!-- Use the latest (edge) version of IE rendering engine -->
		<meta name="x-apple-disable-message-reformatting"> <!-- Disable auto-scale in iOS 10 Mail entirely -->
		<title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->

		<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">

		<!-- CSS Reset : BEGIN -->
		<style>
			html,
			body {
				margin: 0 auto !important;
				padding: 0 !important;
				height: 100% !important;
				width: 100% !important;
				background: #f1f1f1;
			}

			/* What it does: Stops email clients resizing small text. */
			* {
				-ms-text-size-adjust: 100%;
				-webkit-text-size-adjust: 100%;
			}

			/* What it does: Centers email on Android 4.4 */
			div[style*="margin: 16px 0"] {
				margin: 0 !important;
			}

			/* What it does: Stops Outlook from adding extra spacing to tables. */
			table,
			td {
				mso-table-lspace: 0pt !important;
				mso-table-rspace: 0pt !important;
			}

			/* What it does: Fixes webkit padding issue. */
			table {
				border-spacing: 0 !important;
				border-collapse: collapse !important;
				table-layout: fixed !important;
				margin: 0 auto !important;
			}

			/* What it does: Uses a better rendering method when resizing images in IE. */
			img {
				-ms-interpolation-mode: bicubic;
			}

			/* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
			a {
				text-decoration: none;
			}

			/* What it does: A work-around for email clients meddling in triggered links. */
			*[x-apple-data-detectors],
			/* iOS */
			.unstyle-auto-detected-links *,
			.aBn {
				border-bottom: 0 !important;
				cursor: default !important;
				color: inherit !important;
				text-decoration: none !important;
				font-size: inherit !important;
				font-family: inherit !important;
				font-weight: inherit !important;
				line-height: inherit !important;
			}

			/* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
			.a6S {
				display: none !important;
				opacity: 0.01 !important;
			}

			/* What it does: Prevents Gmail from changing the text color in conversation threads. */
			.im {
				color: inherit !important;
			}

			/* If the above doesn't work, add a .g-img class to any image in question. */
			img.g-img+div {
				display: none !important;
			}

			/* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
			/* Create one of these media queries for each additional viewport size you'd like to fix */

			/* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
			@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
				u~div .email-container {
					min-width: 320px !important;
				}
			}

			/* iPhone 6, 6S, 7, 8, and X */
			@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
				u~div .email-container {
					min-width: 375px !important;
				}
			}

			/* iPhone 6+, 7+, and 8+ */
			@media only screen and (min-device-width: 414px) {
				u~div .email-container {
					min-width: 414px !important;
				}
			}
		</style>

		<!-- CSS Reset : END -->

		<!-- Progressive Enhancements : BEGIN -->
		<style>
			.primary {
				background: #0d0cb5;
			}

			.blur {
				/* background: url(img/Blur.png); */
				background-color: #222222;
				opacity: 0.98;
			}

			.bg_white {
				background: #ffffff;
			}

			.bg_light {
				background: #fafafa;
			}

			.bg_black {
				background: #000000;
			}

			.bg_dark {
				background: rgba(0, 0, 0, .8);
			}

			.email-section {
				padding: 2.5em;
			}

			/*BUTTON*/
			.btn {
				padding: 5px 15px;
				display: inline-block;
			}

			.btn.btn-primary {
				border-radius: 5px;
				background: #0d0cb5;
				color: #ffffff;
			}

			.btn.btn-white {
				border-radius: 5px;
				background: #ffffff;
				color: #000000;
			}

			.btn.btn-white-outline {
				border-radius: 5px;
				background: #CAFF87;
				border: 1px solid #fff;
				color: black;
				padding: 24px 36px;
			}

			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				font-family: 'Poppins', sans-serif;
				color: #000000;
				margin-top: 0;
			}

			body {
				font-family: 'Poppins', sans-serif;
				font-weight: 400;
				font-size: 15px;
				line-height: 1.8;
				color: rgba(0, 0, 0, .4);
			}

			a {
				color: #0d0cb5;
			}

			table {}

			.box-table {
				max-width: 560px;
			}

			.hero-table {
				max-width: 838px;
				height: 250px;
			}

			.hero-table td {
				background-color: white;
			}

			.box-table td:first-child {
				width: 180px;
			}

			/*LOGO*/

			.logo h1 {
				margin: 0;
			}

			.logo h1 a {
				color: #000000;
				font-size: 20px;
				font-weight: 700;
				text-transform: uppercase;
				font-family: 'Poppins', sans-serif;
			}

			.navigation {
				padding: 0;
			}

			.navigation li {
				list-style: none;
				display: inline-block;
				;
				margin-left: 5px;
				font-size: 13px;
				font-weight: 500;
			}

			.navigation li a {
				color: rgba(0, 0, 0, .4);
			}

			/*HERO*/
			.hero {
				position: relative;
				z-index: 0;
			}

			.hero .overlay {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				content: '';
				width: 100%;
				background: #02B68A;
				z-index: -1;
				height: 735px;
			}

			.hero .icon {}

			.hero .icon a {
				display: block;
				width: 60px;
				margin: 0 auto;
			}

			.hero .text {
				color: rgba(255, 255, 255, .8);
			}

			.hero .text h2 {
				color: #ffffff;
				margin-bottom: 0;
			}


			/*HEADING SECTION*/
			.heading-section {}

			.heading-section h2 {
				color: #000000;
				font-size: 20px;
				margin-top: 0;
				line-height: 1.4;
				font-weight: 700;
				text-transform: uppercase;
			}

			.heading-section .subheading {
				margin-bottom: 20px !important;
				display: inline-block;
				font-size: 13px;
				text-transform: uppercase;
				letter-spacing: 2px;
				color: rgba(0, 0, 0, .4);
				position: relative;
			}

			.heading-section .subheading::after {
				position: absolute;
				left: 0;
				right: 0;
				bottom: -10px;
				content: '';
				width: 100%;
				height: 2px;
				background: #0d0cb5;
				margin: 0 auto;
			}

			.heading-section-white {
				color: rgba(255, 255, 255, .8);
			}

			.heading-section-white h2 {
				font-family:
					line-height: 1;
				padding-bottom: 0;
			}

			.heading-section-white h2 {
				color: #ffffff;
			}

			.heading-section-white .subheading {
				margin-bottom: 0;
				display: inline-block;
				font-size: 13px;
				text-transform: uppercase;
				letter-spacing: 2px;
				color: rgba(255, 255, 255, .4);
			}


			.icon {
				text-align: center;
			}

			.icon img {}


			/*SERVICES*/
			.services {
				background: rgba(0, 0, 0, .03);
			}

			.text-services {
				padding: 10px 10px 0;
				text-align: center;
			}

			.text-services h3 {
				font-size: 16px;
				font-weight: 600;
			}

			.services-list {
				padding: 0;
				margin: 0 0 20px 0;
				width: 100%;
				float: left;
			}

			.services-list img {
				float: left;
			}

			.services-list .text {
				width: calc(100% - 60px);
				float: right;
			}

			.services-list h3 {
				margin-top: 0;
				margin-bottom: 0;
			}

			.services-list p {
				margin: 0;
			}

			/*BLOG*/
			.text-services .meta {
				text-transform: uppercase;
				font-size: 14px;
			}

			/*TESTIMONY*/
			.text-testimony .name {
				margin: 0;
			}

			.text-testimony p {
				font-size: 20px;
				font-weight: 400;
				line-height: 28px;
				text-align: left;
			}

			.text-testimony .position {
				color: rgba(0, 0, 0, .3);

			}


			/*VIDEO*/
			.img {
				width: 100%;
				height: auto;
				position: relative;
			}

			.img .icon {
				position: absolute;
				top: 50%;
				left: 0;
				right: 0;
				bottom: 0;
				margin-top: -25px;
			}

			.img .icon a {
				display: block;
				width: 60px;
				position: absolute;
				top: 0;
				left: 50%;
				margin-left: -25px;
			}



			/*COUNTER*/
			.counter {
				width: 100%;
				position: relative;
				z-index: 0;
			}

			.counter .overlay {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				content: '';
				width: 100%;
				background: #000000;
				z-index: -1;
				opacity: .3;
			}

			.counter-text {
				text-align: center;
			}

			.counter-text .num {
				display: block;
				color: #ffffff;
				font-size: 34px;
				font-weight: 700;
			}

			.counter-text .name {
				display: block;
				color: rgba(255, 255, 255, .9);
				font-size: 13px;
			}

			@media screen and (max-width: 500px) {

				.icon {
					text-align: left;
				}

				.text-services {
					padding-left: 0;
					padding-right: 20px;
					text-align: left;
				}

			}
		</style>
		<style>
			.img-text-box {
				display: inline-block;
				margin: 20px;
				width: 45%;
			}

			.img-text-box div {
				display: inline-grid;
				vertical-align: middle;
				margin: 10px;
			}

			.img-text-box div:last-child {
				width: 50%;
			}

			h2.hero-heading {
				font-size: 92px !important;
				line-height: 112px !important;
				font-weight: 600 !important;
			}

			h3.score-heading {
				font-size: 58px;
				line-height: 64px;
				font-weight: 600;
				margin-bottom: 30px;
			}

			h2.price-heading {
				font-size: 48px !important;
				line-height: 56px !important;
				font-weight: 400 !important;
			}

			h2.unlock-heading {
				font-size: 58px !important;
				line-height: 64px !important;
				font-weight: 600 !important;
			}

			.cover {
				top: 574px !important;
			}

			.desktop {
				display: block !important;
			}

			.mobile {
				display: none !important;
			}

			@media screen and (max-width: 768px) {
				.desktop {
					display: block !important;
				}

				h2.hero-heading {
					font-size: 58px !important;
					line-height: 64px !important;
					font-weight: 600 !important;
					margin-top: 20px !important;
					margin-bottom: 30px !important;
				}

				h3.score-heading {
					font-size: 38px !important;
					line-height: 48px !important;
					font-weight: 600 !important;
					margin-bottom: 0px !important;
				}

				h2.price-heading {
					font-size: 26px !important;
					line-height: 32px !important;
					font-weight: 400 !important;
				}

				h2.unlock-heading {
					font-size: 38px !important;
					line-height: 48px !important;
					font-weight: 600 !important;
				}

				.schore-text {
					font-size: 14px !important;
				}

				.text-testimony p {
					font-size: 16px !important;
				}
			}


			@media screen and (max-width: 450px) {
				.desktop {
					display: none !important;
				}

				.mobile {
					display: block !important;
				}

				.logo img {
					width: 100px !important;
				}

				.text {
					padding: 0px !important;
				}

				.text p {
					font-size: 16px !important;
					line-height: 24px !important;
					margin-left: 0px !important;
					margin-bottom: 0px !important;
					padding: 0px 10px !important;
				}

				.logo a {
					font-size: 16px !important;
				}

				.hero-table {
					height: 344px !important;
					margin: 20px !important;
				}

				h2.hero-heading {
					font-size: 38px !important;
					line-height: 48px !important;
					font-weight: 600 !important;
					margin-top: 20px !important;
					margin-bottom: 10px !important;
				}

				h2.name-heading {
					font-size: 26px !important;
					line-height: 32px in !important;
				}

				h3.score-heading {
					font-size: 32px !important;
					line-height: 40px !important;
					font-weight: 600 !important;
					margin-bottom: 0px !important;
					margin: 10px 0px !important;
				}

				.convered-img {
					margin-top: 80px !important;
				}

				.cover {
					top: 586px !important;
				}

				.heading-section-white {
					padding: 0px !important;
				}

				h2.price-heading {
					font-size: 26px !important;
					line-height: 32px !important;
					font-weight: 400 !important;
				}

				h2.unlock-heading {
					font-size: 18px !important;
					line-height: 24px !important;
					font-weight: 600 !important;
					padding-top: 15px;
				}

				.schore-text {
					font-size: 14px !important;
				}

				.text-testimony p {
					font-size: 16px !important;
					text-align: center !important;
				}

				.img-text-box {
					width: 90% !important;
				}

				.img-text-box div:last-child {
					width: 100% !important;
				}

				.btn.btn-white-outline {
					width: 75% !important;
				}

				.email-section {
					padding: 0px !important;
				}
			}
		</style>


	</head>

	<body width="100%"
		style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;">
		<center style="width: 100%; background-color: #f1f1f1;">
			<div
				style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
				&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
			</div>
			<div style="max-width: 1440px; margin: 0 auto; height: 815px;" class="email-container">
				<!-- BEGIN BODY -->
				<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
					style="margin: auto;">
					<tr>
						<td valign="top" class="bg_white"
							style="padding: 0em 2.5em; height: 80px;     vertical-align: middle;">
							<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
								<tr>
									<td width="40%" class="logo" style="text-align: left;">
										<a style="font-size: 20px;" href="#">
											<img src="../img/Logo.png" </a>
									</td>
									<td width="60%" class="logo" style="text-align: right;">
										<ul class="navigation">
											<li><a href="#"
													style=" font-size: 20px; line-height: 28px; font-weight: 400;">GROWTH
													Assessment</a></li>
										</ul>
									</td>
								</tr>
							</table>
						</td>
					</tr><!-- end tr -->
					<tr>
						<td valign="middle" class="hero bg_white"
							style="background-image: url(../images/bg_1.jpg); background-size: cover; height: 400px;">
							<div class="overlay"></div>
							<table>
								<tr>
									<td>
										<div class="text"
											style="padding: 0 3em; text-align: center; padding-top: 65px;">
											<h2 class="hero-heading">
												Congratulations</h2>
											<h2 class="name-heading"
												style="font-size: 48px; line-height: 56px; font-weight: 400;">John Smith
											</h2>
											<p
												style="font-size: 20px; line-height: 28px; font-weight: 400; margin-bottom: 50px;">
												on completing the Glo-raise GROWTH assessment<br />
												– the premier business attractiveness assessment globally.</p>

											<table class="hero-table desktop"
												style="border-collapse: collapse; border-radius: 10px;">
												<tr>
													<td class="text-testimony heading-section-white"
														style="text-align: center; vertical-align: top; padding-top: 40px;">
														<h3 class="score-heading">
															Your score is</h3>
														<p class="schore-text"
															style="    margin-left: 50px; font-size: 16px; line-height: 24px; color: black; padding:0px;">
															Scores range from Level 1 (lowest) to Level 5 (highest) with
															Level 5 most closely aligning with the factors known to
															drive entrepreneurial success.</p>
													</td>
													<td>
														<img src="../img/One.png">
													</td>

												</tr>
											</table>
											<table style="display: none" class="hero-table mobile">
												<tbody>
													<tr>
														<td>
															<h3 class="score-heading">Your score is</h3>
															<img src="../img/one-horizental.png">
															<p class="schore-text"
																style="    margin-left: 50px; font-size: 16px; line-height: 24px; color: black; padding:0px;">
																Scores range from Level 1 (lowest) to Level 5 (highest)
																with
																Level 5 most closely aligning with the factors known to
																drive entrepreneurial success.</p>
														</td>
													</tr>
												</tbody>

										</div>

			</div>
			</td>
			</tr>
			</table>
			<img class="desktop" style="position: absolute; z-index: -1;	margin-top: -379px;	left: -30px;"
				src="../img/Vector-54.png" />
			<img class="mobile" style="position: absolute; z-index: -1;	width: 100%;margin-top: -100px;"
				src="../img/Vector-full-54 (1).png" />
			</td>
			</tr><!-- end tr -->
			</table>
			</div>
			<div class="convered-img" style="height: 620px; overflow: hidden;     filter: blur(5px);">
				<img src="../img/Blur.png" style="width: 100%;" />
			</div>
			<div class="cover" style=" position: absolute; top: 657px; left: -1px; opacity: 0.95;"
				class="email-container">
				<table>
					<tr>
						<td>
							<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">


								<tr>
									<td class="blur email-section" style="text-align:center;">
										<div class="heading-section heading-section-white"
											style="text-align: center; padding: 0 30px;">
											<h2 class="unlock-heading">
												Unlock your complete Glo-raise GROWTH™ score</h2>

										</div>
										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape1.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">

												<p>visualization breakdown of the % of founders per region</p>
											</div>
										</div>

										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape3.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">
												<p>examples of eventual unicorns from each level</p>

											</div>
										</div>

										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape4.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">
												<p>personalized action report based on your responses to help you drive
													next-level GROWTH</p>

											</div>
										</div>

										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape2.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">

												<p>overall level for all founders globally and the % of founders scoring
													in each level</p>
											</div>
										</div>
										<div class="heading-section heading-section-white">
											<h2 class="price-heading">limited time just $29 ($300 value)</h2>
											<p><a href="#" class="btn btn-white-outline"
													style="font-size: 20px; line-height: 28px; font-weight: 400;">Unlock</a>
											</p>
										</div>
									</td>
								</tr>
							</table>

						</td>
					</tr><!-- end:tr -->
					<!-- 1 Column Text + Button : END -->
				</table>
			</div>
			</div>

		</center>
	</body>

</html>`;
};
export const twoPrem = ({ name }) => {
  return `<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
	xmlns:o="urn:schemas-microsoft-com:office:office">

	<head>
		<meta charset="utf-8"> <!-- utf-8 works for most cases -->
		<meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<!-- Use the latest (edge) version of IE rendering engine -->
		<meta name="x-apple-disable-message-reformatting"> <!-- Disable auto-scale in iOS 10 Mail entirely -->
		<title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->

		<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">

		<!-- CSS Reset : BEGIN -->
		<style>
			html,
			body {
				margin: 0 auto !important;
				padding: 0 !important;
				height: 100% !important;
				width: 100% !important;
				background: #f1f1f1;
			}

			/* What it does: Stops email clients resizing small text. */
			* {
				-ms-text-size-adjust: 100%;
				-webkit-text-size-adjust: 100%;
			}

			/* What it does: Centers email on Android 4.4 */
			div[style*="margin: 16px 0"] {
				margin: 0 !important;
			}

			/* What it does: Stops Outlook from adding extra spacing to tables. */
			table,
			td {
				mso-table-lspace: 0pt !important;
				mso-table-rspace: 0pt !important;
			}

			/* What it does: Fixes webkit padding issue. */
			table {
				border-spacing: 0 !important;
				border-collapse: collapse !important;
				table-layout: fixed !important;
				margin: 0 auto !important;
			}

			/* What it does: Uses a better rendering method when resizing images in IE. */
			img {
				-ms-interpolation-mode: bicubic;
			}

			/* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
			a {
				text-decoration: none;
			}

			/* What it does: A work-around for email clients meddling in triggered links. */
			*[x-apple-data-detectors],
			/* iOS */
			.unstyle-auto-detected-links *,
			.aBn {
				border-bottom: 0 !important;
				cursor: default !important;
				color: inherit !important;
				text-decoration: none !important;
				font-size: inherit !important;
				font-family: inherit !important;
				font-weight: inherit !important;
				line-height: inherit !important;
			}

			/* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
			.a6S {
				display: none !important;
				opacity: 0.01 !important;
			}

			/* What it does: Prevents Gmail from changing the text color in conversation threads. */
			.im {
				color: inherit !important;
			}

			/* If the above doesn't work, add a .g-img class to any image in question. */
			img.g-img+div {
				display: none !important;
			}

			/* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
			/* Create one of these media queries for each additional viewport size you'd like to fix */

			/* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
			@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
				u~div .email-container {
					min-width: 320px !important;
				}
			}

			/* iPhone 6, 6S, 7, 8, and X */
			@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
				u~div .email-container {
					min-width: 375px !important;
				}
			}

			/* iPhone 6+, 7+, and 8+ */
			@media only screen and (min-device-width: 414px) {
				u~div .email-container {
					min-width: 414px !important;
				}
			}
		</style>

		<!-- CSS Reset : END -->

		<!-- Progressive Enhancements : BEGIN -->
		<style>
			.primary {
				background: #0d0cb5;
			}

			.blur {
				/* background: url(img/Blur.png); */
				background-color: #222222;
				opacity: 0.98;
			}

			.bg_white {
				background: #ffffff;
			}

			.bg_light {
				background: #fafafa;
			}

			.bg_black {
				background: #000000;
			}

			.bg_dark {
				background: rgba(0, 0, 0, .8);
			}

			.email-section {
				padding: 2.5em;
			}

			/*BUTTON*/
			.btn {
				padding: 5px 15px;
				display: inline-block;
			}

			.btn.btn-primary {
				border-radius: 5px;
				background: #0d0cb5;
				color: #ffffff;
			}

			.btn.btn-white {
				border-radius: 5px;
				background: #ffffff;
				color: #000000;
			}

			.btn.btn-white-outline {
				border-radius: 5px;
				background: #CAFF87;
				border: 1px solid #fff;
				color: black;
				padding: 24px 36px;
			}

			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				font-family: 'Poppins', sans-serif;
				color: #000000;
				margin-top: 0;
			}

			body {
				font-family: 'Poppins', sans-serif;
				font-weight: 400;
				font-size: 15px;
				line-height: 1.8;
				color: rgba(0, 0, 0, .4);
			}

			a {
				color: #0d0cb5;
			}

			table {}

			.box-table {
				max-width: 560px;
			}

			.hero-table {
				max-width: 838px;
				height: 250px;
			}

			.hero-table td {
				background-color: white;
			}

			.box-table td:first-child {
				width: 180px;
			}

			/*LOGO*/

			.logo h1 {
				margin: 0;
			}

			.logo h1 a {
				color: #000000;
				font-size: 20px;
				font-weight: 700;
				text-transform: uppercase;
				font-family: 'Poppins', sans-serif;
			}

			.navigation {
				padding: 0;
			}

			.navigation li {
				list-style: none;
				display: inline-block;
				;
				margin-left: 5px;
				font-size: 13px;
				font-weight: 500;
			}

			.navigation li a {
				color: rgba(0, 0, 0, .4);
			}

			/*HERO*/
			.hero {
				position: relative;
				z-index: 0;
			}

			.hero .overlay {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				content: '';
				width: 100%;
				background: #02B68A;
				z-index: -1;
				height: 735px;
			}

			.hero .icon {}

			.hero .icon a {
				display: block;
				width: 60px;
				margin: 0 auto;
			}

			.hero .text {
				color: rgba(255, 255, 255, .8);
			}

			.hero .text h2 {
				color: #ffffff;
				margin-bottom: 0;
			}


			/*HEADING SECTION*/
			.heading-section {}

			.heading-section h2 {
				color: #000000;
				font-size: 20px;
				margin-top: 0;
				line-height: 1.4;
				font-weight: 700;
				text-transform: uppercase;
			}

			.heading-section .subheading {
				margin-bottom: 20px !important;
				display: inline-block;
				font-size: 13px;
				text-transform: uppercase;
				letter-spacing: 2px;
				color: rgba(0, 0, 0, .4);
				position: relative;
			}

			.heading-section .subheading::after {
				position: absolute;
				left: 0;
				right: 0;
				bottom: -10px;
				content: '';
				width: 100%;
				height: 2px;
				background: #0d0cb5;
				margin: 0 auto;
			}

			.heading-section-white {
				color: rgba(255, 255, 255, .8);
			}

			.heading-section-white h2 {
				font-family:
					line-height: 1;
				padding-bottom: 0;
			}

			.heading-section-white h2 {
				color: #ffffff;
			}

			.heading-section-white .subheading {
				margin-bottom: 0;
				display: inline-block;
				font-size: 13px;
				text-transform: uppercase;
				letter-spacing: 2px;
				color: rgba(255, 255, 255, .4);
			}


			.icon {
				text-align: center;
			}

			.icon img {}


			/*SERVICES*/
			.services {
				background: rgba(0, 0, 0, .03);
			}

			.text-services {
				padding: 10px 10px 0;
				text-align: center;
			}

			.text-services h3 {
				font-size: 16px;
				font-weight: 600;
			}

			.services-list {
				padding: 0;
				margin: 0 0 20px 0;
				width: 100%;
				float: left;
			}

			.services-list img {
				float: left;
			}

			.services-list .text {
				width: calc(100% - 60px);
				float: right;
			}

			.services-list h3 {
				margin-top: 0;
				margin-bottom: 0;
			}

			.services-list p {
				margin: 0;
			}

			/*BLOG*/
			.text-services .meta {
				text-transform: uppercase;
				font-size: 14px;
			}

			/*TESTIMONY*/
			.text-testimony .name {
				margin: 0;
			}

			.text-testimony p {
				font-size: 20px;
				font-weight: 400;
				line-height: 28px;
				text-align: left;
			}

			.text-testimony .position {
				color: rgba(0, 0, 0, .3);

			}


			/*VIDEO*/
			.img {
				width: 100%;
				height: auto;
				position: relative;
			}

			.img .icon {
				position: absolute;
				top: 50%;
				left: 0;
				right: 0;
				bottom: 0;
				margin-top: -25px;
			}

			.img .icon a {
				display: block;
				width: 60px;
				position: absolute;
				top: 0;
				left: 50%;
				margin-left: -25px;
			}



			/*COUNTER*/
			.counter {
				width: 100%;
				position: relative;
				z-index: 0;
			}

			.counter .overlay {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				content: '';
				width: 100%;
				background: #000000;
				z-index: -1;
				opacity: .3;
			}

			.counter-text {
				text-align: center;
			}

			.counter-text .num {
				display: block;
				color: #ffffff;
				font-size: 34px;
				font-weight: 700;
			}

			.counter-text .name {
				display: block;
				color: rgba(255, 255, 255, .9);
				font-size: 13px;
			}

			@media screen and (max-width: 500px) {

				.icon {
					text-align: left;
				}

				.text-services {
					padding-left: 0;
					padding-right: 20px;
					text-align: left;
				}

			}
		</style>
		<style>
			.img-text-box {
				display: inline-block;
				margin: 20px;
				width: 45%;
			}

			.img-text-box div {
				display: inline-grid;
				vertical-align: middle;
				margin: 10px;
			}

			.img-text-box div:last-child {
				width: 50%;
			}

			h2.hero-heading {
				font-size: 92px !important;
				line-height: 112px !important;
				font-weight: 600 !important;
			}

			h3.score-heading {
				font-size: 58px;
				line-height: 64px;
				font-weight: 600;
				margin-bottom: 30px;
			}

			h2.price-heading {
				font-size: 48px !important;
				line-height: 56px !important;
				font-weight: 400 !important;
			}

			h2.unlock-heading {
				font-size: 58px !important;
				line-height: 64px !important;
				font-weight: 600 !important;
			}

			.cover {
				top: 574px !important;
			}

			.desktop {
				display: block !important;
			}

			.mobile {
				display: none !important;
			}

			@media screen and (max-width: 768px) {
				.desktop {
					display: block !important;
				}

				h2.hero-heading {
					font-size: 58px !important;
					line-height: 64px !important;
					font-weight: 600 !important;
					margin-top: 20px !important;
					margin-bottom: 30px !important;
				}

				h3.score-heading {
					font-size: 38px !important;
					line-height: 48px !important;
					font-weight: 600 !important;
					margin-bottom: 0px !important;
				}

				h2.price-heading {
					font-size: 26px !important;
					line-height: 32px !important;
					font-weight: 400 !important;
				}

				h2.unlock-heading {
					font-size: 38px !important;
					line-height: 48px !important;
					font-weight: 600 !important;
				}

				.schore-text {
					font-size: 14px !important;
				}

				.text-testimony p {
					font-size: 16px !important;
				}
			}


			@media screen and (max-width: 450px) {
				.desktop {
					display: none !important;
				}

				.mobile {
					display: block !important;
				}

				.logo img {
					width: 100px !important;
				}

				.text {
					padding: 0px !important;
				}

				.text p {
					font-size: 16px !important;
					line-height: 24px !important;
					margin-left: 0px !important;
					margin-bottom: 0px !important;
					padding: 0px 10px !important;
				}

				.logo a {
					font-size: 16px !important;
				}

				.hero-table {
					height: 344px !important;
					margin: 20px !important;
				}

				h2.hero-heading {
					font-size: 38px !important;
					line-height: 48px !important;
					font-weight: 600 !important;
					margin-top: 20px !important;
					margin-bottom: 10px !important;
				}

				h2.name-heading {
					font-size: 26px !important;
					line-height: 32px in !important;
				}

				h3.score-heading {
					font-size: 32px !important;
					line-height: 40px !important;
					font-weight: 600 !important;
					margin-bottom: 0px !important;
					margin: 10px 0px !important;
				}

				.convered-img {
					margin-top: 80px !important;
				}

				.cover {
					top: 586px !important;
				}

				.heading-section-white {
					padding: 0px !important;
				}

				h2.price-heading {
					font-size: 26px !important;
					line-height: 32px !important;
					font-weight: 400 !important;
				}

				h2.unlock-heading {
					font-size: 18px !important;
					line-height: 24px !important;
					font-weight: 600 !important;
					padding-top: 15px;
				}

				.schore-text {
					font-size: 14px !important;
				}

				.text-testimony p {
					font-size: 16px !important;
					text-align: center !important;
				}

				.img-text-box {
					width: 90% !important;
				}

				.img-text-box div:last-child {
					width: 100% !important;
				}

				.btn.btn-white-outline {
					width: 75% !important;
				}

				.email-section {
					padding: 0px !important;
				}
			}
		</style>


	</head>

	<body width="100%"
		style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;">
		<center style="width: 100%; background-color: #f1f1f1;">
			<div
				style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
				&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
			</div>
			<div style="max-width: 1440px; margin: 0 auto; height: 815px;" class="email-container">
				<!-- BEGIN BODY -->
				<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
					style="margin: auto;">
					<tr>
						<td valign="top" class="bg_white"
							style="padding: 0em 2.5em; height: 80px;     vertical-align: middle;">
							<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
								<tr>
									<td width="40%" class="logo" style="text-align: left;">
										<a style="font-size: 20px;" href="#">
											<img src="../img/Logo.png" </a>
									</td>
									<td width="60%" class="logo" style="text-align: right;">
										<ul class="navigation">
											<li><a href="#"
													style=" font-size: 20px; line-height: 28px; font-weight: 400;">GROWTH
													Assessment</a></li>
										</ul>
									</td>
								</tr>
							</table>
						</td>
					</tr><!-- end tr -->
					<tr>
						<td valign="middle" class="hero bg_white"
							style="background-image: url(../images/bg_1.jpg); background-size: cover; height: 400px;">
							<div class="overlay"></div>
							<table>
								<tr>
									<td>
										<div class="text"
											style="padding: 0 3em; text-align: center; padding-top: 65px;">
											<h2 class="hero-heading">
												Congratulations</h2>
											<h2 class="name-heading"
												style="font-size: 48px; line-height: 56px; font-weight: 400;">John Smith
											</h2>
											<p
												style="font-size: 20px; line-height: 28px; font-weight: 400; margin-bottom: 50px;">
												on completing the Glo-raise GROWTH assessment<br />
												– the premier business attractiveness assessment globally.</p>

											<table class="hero-table desktop"
												style="border-collapse: collapse; border-radius: 10px;">
												<tr>
													<td class="text-testimony heading-section-white"
														style="text-align: center; vertical-align: top; padding-top: 40px;">
														<h3 class="score-heading">
															Your score is</h3>
														<p class="schore-text"
															style="    margin-left: 50px; font-size: 16px; line-height: 24px; color: black; padding:0px;">
															Scores range from Level 1 (lowest) to Level 5 (highest) with
															Level 5 most closely aligning with the factors known to
															drive entrepreneurial success.</p>
													</td>
													<td>
														<img src="../img/One.png">
													</td>

												</tr>
											</table>
											<table style="display: none" class="hero-table mobile">
												<tbody>
													<tr>
														<td>
															<h3 class="score-heading">Your score is</h3>
															<img src="../img/one-horizental.png">
															<p class="schore-text"
																style="    margin-left: 50px; font-size: 16px; line-height: 24px; color: black; padding:0px;">
																Scores range from Level 1 (lowest) to Level 5 (highest)
																with
																Level 5 most closely aligning with the factors known to
																drive entrepreneurial success.</p>
														</td>
													</tr>
												</tbody>

										</div>

			</div>
			</td>
			</tr>
			</table>
			<img class="desktop" style="position: absolute; z-index: -1;	margin-top: -379px;	left: -30px;"
				src="../img/Vector-54.png" />
			<img class="mobile" style="position: absolute; z-index: -1;	width: 100%;margin-top: -100px;"
				src="../img/Vector-full-54 (1).png" />
			</td>
			</tr><!-- end tr -->
			</table>
			</div>
			<div class="convered-img" style="height: 620px; overflow: hidden;     filter: blur(5px);">
				<img src="../img/Blur.png" style="width: 100%;" />
			</div>
			<div class="cover" style=" position: absolute; top: 657px; left: -1px; opacity: 0.95;"
				class="email-container">
				<table>
					<tr>
						<td>
							<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">


								<tr>
									<td class="blur email-section" style="text-align:center;">
										<div class="heading-section heading-section-white"
											style="text-align: center; padding: 0 30px;">
											<h2 class="unlock-heading">
												Unlock your complete Glo-raise GROWTH™ score</h2>

										</div>
										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape1.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">

												<p>visualization breakdown of the % of founders per region</p>
											</div>
										</div>

										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape3.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">
												<p>examples of eventual unicorns from each level</p>

											</div>
										</div>

										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape4.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">
												<p>personalized action report based on your responses to help you drive
													next-level GROWTH</p>

											</div>
										</div>

										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape2.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">

												<p>overall level for all founders globally and the % of founders scoring
													in each level</p>
											</div>
										</div>
										<div class="heading-section heading-section-white">
											<h2 class="price-heading">limited time just $29 ($300 value)</h2>
											<p><a href="#" class="btn btn-white-outline"
													style="font-size: 20px; line-height: 28px; font-weight: 400;">Unlock</a>
											</p>
										</div>
									</td>
								</tr>
							</table>

						</td>
					</tr><!-- end:tr -->
					<!-- 1 Column Text + Button : END -->
				</table>
			</div>
			</div>

		</center>
	</body>

</html>`;
};
export const thirdFree = ({ name }) => {
  return `<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
	xmlns:o="urn:schemas-microsoft-com:office:office">

	<head>
		<meta charset="utf-8"> <!-- utf-8 works for most cases -->
		<meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<!-- Use the latest (edge) version of IE rendering engine -->
		<meta name="x-apple-disable-message-reformatting"> <!-- Disable auto-scale in iOS 10 Mail entirely -->
		<title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->

		<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">

		<!-- CSS Reset : BEGIN -->
		<style>
			html,
			body {
				margin: 0 auto !important;
				padding: 0 !important;
				height: 100% !important;
				width: 100% !important;
				background: #f1f1f1;
			}

			/* What it does: Stops email clients resizing small text. */
			* {
				-ms-text-size-adjust: 100%;
				-webkit-text-size-adjust: 100%;
			}

			/* What it does: Centers email on Android 4.4 */
			div[style*="margin: 16px 0"] {
				margin: 0 !important;
			}

			/* What it does: Stops Outlook from adding extra spacing to tables. */
			table,
			td {
				mso-table-lspace: 0pt !important;
				mso-table-rspace: 0pt !important;
			}

			/* What it does: Fixes webkit padding issue. */
			table {
				border-spacing: 0 !important;
				border-collapse: collapse !important;
				table-layout: fixed !important;
				margin: 0 auto !important;
			}

			/* What it does: Uses a better rendering method when resizing images in IE. */
			img {
				-ms-interpolation-mode: bicubic;
			}

			/* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
			a {
				text-decoration: none;
			}

			/* What it does: A work-around for email clients meddling in triggered links. */
			*[x-apple-data-detectors],
			/* iOS */
			.unstyle-auto-detected-links *,
			.aBn {
				border-bottom: 0 !important;
				cursor: default !important;
				color: inherit !important;
				text-decoration: none !important;
				font-size: inherit !important;
				font-family: inherit !important;
				font-weight: inherit !important;
				line-height: inherit !important;
			}

			/* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
			.a6S {
				display: none !important;
				opacity: 0.01 !important;
			}

			/* What it does: Prevents Gmail from changing the text color in conversation threads. */
			.im {
				color: inherit !important;
			}

			/* If the above doesn't work, add a .g-img class to any image in question. */
			img.g-img+div {
				display: none !important;
			}

			/* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
			/* Create one of these media queries for each additional viewport size you'd like to fix */

			/* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
			@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
				u~div .email-container {
					min-width: 320px !important;
				}
			}

			/* iPhone 6, 6S, 7, 8, and X */
			@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
				u~div .email-container {
					min-width: 375px !important;
				}
			}

			/* iPhone 6+, 7+, and 8+ */
			@media only screen and (min-device-width: 414px) {
				u~div .email-container {
					min-width: 414px !important;
				}
			}
		</style>

		<!-- CSS Reset : END -->

		<!-- Progressive Enhancements : BEGIN -->
		<style>
			.primary {
				background: #0d0cb5;
			}

			.blur {
				/* background: url(img/Blur.png); */
				background-color: #222222;
				opacity: 0.98;
			}

			.bg_white {
				background: #ffffff;
			}

			.bg_light {
				background: #fafafa;
			}

			.bg_black {
				background: #000000;
			}

			.bg_dark {
				background: rgba(0, 0, 0, .8);
			}

			.email-section {
				padding: 2.5em;
			}

			/*BUTTON*/
			.btn {
				padding: 5px 15px;
				display: inline-block;
			}

			.btn.btn-primary {
				border-radius: 5px;
				background: #0d0cb5;
				color: #ffffff;
			}

			.btn.btn-white {
				border-radius: 5px;
				background: #ffffff;
				color: #000000;
			}

			.btn.btn-white-outline {
				border-radius: 5px;
				background: #CAFF87;
				border: 1px solid #fff;
				color: black;
				padding: 24px 36px;
			}

			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				font-family: 'Poppins', sans-serif;
				color: #000000;
				margin-top: 0;
			}

			body {
				font-family: 'Poppins', sans-serif;
				font-weight: 400;
				font-size: 15px;
				line-height: 1.8;
				color: rgba(0, 0, 0, .4);
			}

			a {
				color: #0d0cb5;
			}

			table {}

			.box-table {
				max-width: 560px;
			}

			.hero-table {
				max-width: 838px;
				height: 250px;
			}

			.hero-table td {
				background-color: white;
			}

			.box-table td:first-child {
				width: 180px;
			}

			/*LOGO*/

			.logo h1 {
				margin: 0;
			}

			.logo h1 a {
				color: #000000;
				font-size: 20px;
				font-weight: 700;
				text-transform: uppercase;
				font-family: 'Poppins', sans-serif;
			}

			.navigation {
				padding: 0;
			}

			.navigation li {
				list-style: none;
				display: inline-block;
				;
				margin-left: 5px;
				font-size: 13px;
				font-weight: 500;
			}

			.navigation li a {
				color: rgba(0, 0, 0, .4);
			}

			/*HERO*/
			.hero {
				position: relative;
				z-index: 0;
			}

			.hero .overlay {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				content: '';
				width: 100%;
				background: #02B68A;
				z-index: -1;
				height: 735px;
			}

			.hero .icon {}

			.hero .icon a {
				display: block;
				width: 60px;
				margin: 0 auto;
			}

			.hero .text {
				color: rgba(255, 255, 255, .8);
			}

			.hero .text h2 {
				color: #ffffff;
				margin-bottom: 0;
			}


			/*HEADING SECTION*/
			.heading-section {}

			.heading-section h2 {
				color: #000000;
				font-size: 20px;
				margin-top: 0;
				line-height: 1.4;
				font-weight: 700;
				text-transform: uppercase;
			}

			.heading-section .subheading {
				margin-bottom: 20px !important;
				display: inline-block;
				font-size: 13px;
				text-transform: uppercase;
				letter-spacing: 2px;
				color: rgba(0, 0, 0, .4);
				position: relative;
			}

			.heading-section .subheading::after {
				position: absolute;
				left: 0;
				right: 0;
				bottom: -10px;
				content: '';
				width: 100%;
				height: 2px;
				background: #0d0cb5;
				margin: 0 auto;
			}

			.heading-section-white {
				color: rgba(255, 255, 255, .8);
			}

			.heading-section-white h2 {
				font-family:
					line-height: 1;
				padding-bottom: 0;
			}

			.heading-section-white h2 {
				color: #ffffff;
			}

			.heading-section-white .subheading {
				margin-bottom: 0;
				display: inline-block;
				font-size: 13px;
				text-transform: uppercase;
				letter-spacing: 2px;
				color: rgba(255, 255, 255, .4);
			}


			.icon {
				text-align: center;
			}

			.icon img {}


			/*SERVICES*/
			.services {
				background: rgba(0, 0, 0, .03);
			}

			.text-services {
				padding: 10px 10px 0;
				text-align: center;
			}

			.text-services h3 {
				font-size: 16px;
				font-weight: 600;
			}

			.services-list {
				padding: 0;
				margin: 0 0 20px 0;
				width: 100%;
				float: left;
			}

			.services-list img {
				float: left;
			}

			.services-list .text {
				width: calc(100% - 60px);
				float: right;
			}

			.services-list h3 {
				margin-top: 0;
				margin-bottom: 0;
			}

			.services-list p {
				margin: 0;
			}

			/*BLOG*/
			.text-services .meta {
				text-transform: uppercase;
				font-size: 14px;
			}

			/*TESTIMONY*/
			.text-testimony .name {
				margin: 0;
			}

			.text-testimony p {
				font-size: 20px;
				font-weight: 400;
				line-height: 28px;
				text-align: left;
			}

			.text-testimony .position {
				color: rgba(0, 0, 0, .3);

			}


			/*VIDEO*/
			.img {
				width: 100%;
				height: auto;
				position: relative;
			}

			.img .icon {
				position: absolute;
				top: 50%;
				left: 0;
				right: 0;
				bottom: 0;
				margin-top: -25px;
			}

			.img .icon a {
				display: block;
				width: 60px;
				position: absolute;
				top: 0;
				left: 50%;
				margin-left: -25px;
			}



			/*COUNTER*/
			.counter {
				width: 100%;
				position: relative;
				z-index: 0;
			}

			.counter .overlay {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				content: '';
				width: 100%;
				background: #000000;
				z-index: -1;
				opacity: .3;
			}

			.counter-text {
				text-align: center;
			}

			.counter-text .num {
				display: block;
				color: #ffffff;
				font-size: 34px;
				font-weight: 700;
			}

			.counter-text .name {
				display: block;
				color: rgba(255, 255, 255, .9);
				font-size: 13px;
			}

			@media screen and (max-width: 500px) {

				.icon {
					text-align: left;
				}

				.text-services {
					padding-left: 0;
					padding-right: 20px;
					text-align: left;
				}

			}
		</style>
		<style>
			.img-text-box {
				display: inline-block;
				margin: 20px;
				width: 45%;
			}

			.img-text-box div {
				display: inline-grid;
				vertical-align: middle;
				margin: 10px;
			}

			.img-text-box div:last-child {
				width: 50%;
			}

			h2.hero-heading {
				font-size: 92px !important;
				line-height: 112px !important;
				font-weight: 600 !important;
			}

			h3.score-heading {
				font-size: 58px;
				line-height: 64px;
				font-weight: 600;
				margin-bottom: 30px;
			}

			h2.price-heading {
				font-size: 48px !important;
				line-height: 56px !important;
				font-weight: 400 !important;
			}

			h2.unlock-heading {
				font-size: 58px !important;
				line-height: 64px !important;
				font-weight: 600 !important;
			}

			.cover {
				top: 574px !important;
			}

			.desktop {
				display: block !important;
			}

			.mobile {
				display: none !important;
			}

			@media screen and (max-width: 768px) {
				.desktop {
					display: block !important;
				}

				h2.hero-heading {
					font-size: 58px !important;
					line-height: 64px !important;
					font-weight: 600 !important;
					margin-top: 20px !important;
					margin-bottom: 30px !important;
				}

				h3.score-heading {
					font-size: 38px !important;
					line-height: 48px !important;
					font-weight: 600 !important;
					margin-bottom: 0px !important;
				}

				h2.price-heading {
					font-size: 26px !important;
					line-height: 32px !important;
					font-weight: 400 !important;
				}

				h2.unlock-heading {
					font-size: 38px !important;
					line-height: 48px !important;
					font-weight: 600 !important;
				}

				.schore-text {
					font-size: 14px !important;
				}

				.text-testimony p {
					font-size: 16px !important;
				}
			}


			@media screen and (max-width: 450px) {
				.desktop {
					display: none !important;
				}

				.mobile {
					display: block !important;
				}

				.logo img {
					width: 100px !important;
				}

				.text {
					padding: 0px !important;
				}

				.text p {
					font-size: 16px !important;
					line-height: 24px !important;
					margin-left: 0px !important;
					margin-bottom: 0px !important;
					padding: 0px 10px !important;
				}

				.logo a {
					font-size: 16px !important;
				}

				.hero-table {
					height: 344px !important;
					margin: 20px !important;
				}

				h2.hero-heading {
					font-size: 38px !important;
					line-height: 48px !important;
					font-weight: 600 !important;
					margin-top: 20px !important;
					margin-bottom: 10px !important;
				}

				h2.name-heading {
					font-size: 26px !important;
					line-height: 32px in !important;
				}

				h3.score-heading {
					font-size: 32px !important;
					line-height: 40px !important;
					font-weight: 600 !important;
					margin-bottom: 0px !important;
					margin: 10px 0px !important;
				}

				.convered-img {
					margin-top: 80px !important;
				}

				.cover {
					top: 586px !important;
				}

				.heading-section-white {
					padding: 0px !important;
				}

				h2.price-heading {
					font-size: 26px !important;
					line-height: 32px !important;
					font-weight: 400 !important;
				}

				h2.unlock-heading {
					font-size: 18px !important;
					line-height: 24px !important;
					font-weight: 600 !important;
					padding-top: 15px;
				}

				.schore-text {
					font-size: 14px !important;
				}

				.text-testimony p {
					font-size: 16px !important;
					text-align: center !important;
				}

				.img-text-box {
					width: 90% !important;
				}

				.img-text-box div:last-child {
					width: 100% !important;
				}

				.btn.btn-white-outline {
					width: 75% !important;
				}

				.email-section {
					padding: 0px !important;
				}
			}
		</style>


	</head>

	<body width="100%"
		style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;">
		<center style="width: 100%; background-color: #f1f1f1;">
			<div
				style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
				&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
			</div>
			<div style="max-width: 1440px; margin: 0 auto; height: 815px;" class="email-container">
				<!-- BEGIN BODY -->
				<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
					style="margin: auto;">
					<tr>
						<td valign="top" class="bg_white"
							style="padding: 0em 2.5em; height: 80px;     vertical-align: middle;">
							<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
								<tr>
									<td width="40%" class="logo" style="text-align: left;">
										<a style="font-size: 20px;" href="#">
											<img src="../img/Logo.png" </a>
									</td>
									<td width="60%" class="logo" style="text-align: right;">
										<ul class="navigation">
											<li><a href="#"
													style=" font-size: 20px; line-height: 28px; font-weight: 400;">GROWTH
													Assessment</a></li>
										</ul>
									</td>
								</tr>
							</table>
						</td>
					</tr><!-- end tr -->
					<tr>
						<td valign="middle" class="hero bg_white"
							style="background-image: url(../images/bg_1.jpg); background-size: cover; height: 400px;">
							<div class="overlay"></div>
							<table>
								<tr>
									<td>
										<div class="text"
											style="padding: 0 3em; text-align: center; padding-top: 65px;">
											<h2 class="hero-heading">
												Congratulations</h2>
											<h2 class="name-heading"
												style="font-size: 48px; line-height: 56px; font-weight: 400;">John Smith
											</h2>
											<p
												style="font-size: 20px; line-height: 28px; font-weight: 400; margin-bottom: 50px;">
												on completing the Glo-raise GROWTH assessment<br />
												– the premier business attractiveness assessment globally.</p>

											<table class="hero-table desktop"
												style="border-collapse: collapse; border-radius: 10px;">
												<tr>
													<td class="text-testimony heading-section-white"
														style="text-align: center; vertical-align: top; padding-top: 40px;">
														<h3 class="score-heading">
															Your score is</h3>
														<p class="schore-text"
															style="    margin-left: 50px; font-size: 16px; line-height: 24px; color: black; padding:0px;">
															Scores range from Level 1 (lowest) to Level 5 (highest) with
															Level 5 most closely aligning with the factors known to
															drive entrepreneurial success.</p>
													</td>
													<td>
														<img src="../img/One.png">
													</td>

												</tr>
											</table>
											<table style="display: none" class="hero-table mobile">
												<tbody>
													<tr>
														<td>
															<h3 class="score-heading">Your score is</h3>
															<img src="../img/one-horizental.png">
															<p class="schore-text"
																style="    margin-left: 50px; font-size: 16px; line-height: 24px; color: black; padding:0px;">
																Scores range from Level 1 (lowest) to Level 5 (highest)
																with
																Level 5 most closely aligning with the factors known to
																drive entrepreneurial success.</p>
														</td>
													</tr>
												</tbody>

										</div>

			</div>
			</td>
			</tr>
			</table>
			<img class="desktop" style="position: absolute; z-index: -1;	margin-top: -379px;	left: -30px;"
				src="../img/Vector-54.png" />
			<img class="mobile" style="position: absolute; z-index: -1;	width: 100%;margin-top: -100px;"
				src="../img/Vector-full-54 (1).png" />
			</td>
			</tr><!-- end tr -->
			</table>
			</div>
			<div class="convered-img" style="height: 620px; overflow: hidden;     filter: blur(5px);">
				<img src="../img/Blur.png" style="width: 100%;" />
			</div>
			<div class="cover" style=" position: absolute; top: 657px; left: -1px; opacity: 0.95;"
				class="email-container">
				<table>
					<tr>
						<td>
							<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">


								<tr>
									<td class="blur email-section" style="text-align:center;">
										<div class="heading-section heading-section-white"
											style="text-align: center; padding: 0 30px;">
											<h2 class="unlock-heading">
												Unlock your complete Glo-raise GROWTH™ score</h2>

										</div>
										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape1.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">

												<p>visualization breakdown of the % of founders per region</p>
											</div>
										</div>

										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape3.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">
												<p>examples of eventual unicorns from each level</p>

											</div>
										</div>

										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape4.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">
												<p>personalized action report based on your responses to help you drive
													next-level GROWTH</p>

											</div>
										</div>

										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape2.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">

												<p>overall level for all founders globally and the % of founders scoring
													in each level</p>
											</div>
										</div>
										<div class="heading-section heading-section-white">
											<h2 class="price-heading">limited time just $29 ($300 value)</h2>
											<p><a href="#" class="btn btn-white-outline"
													style="font-size: 20px; line-height: 28px; font-weight: 400;">Unlock</a>
											</p>
										</div>
									</td>
								</tr>
							</table>

						</td>
					</tr><!-- end:tr -->
					<!-- 1 Column Text + Button : END -->
				</table>
			</div>
			</div>

		</center>
	</body>

</html>`;
};
export const thirdPrem = ({ name }) => {
  return `<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
	xmlns:o="urn:schemas-microsoft-com:office:office">

	<head>
		<meta charset="utf-8"> <!-- utf-8 works for most cases -->
		<meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<!-- Use the latest (edge) version of IE rendering engine -->
		<meta name="x-apple-disable-message-reformatting"> <!-- Disable auto-scale in iOS 10 Mail entirely -->
		<title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->

		<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">

		<!-- CSS Reset : BEGIN -->
		<style>
			html,
			body {
				margin: 0 auto !important;
				padding: 0 !important;
				height: 100% !important;
				width: 100% !important;
				background: #f1f1f1;
			}

			/* What it does: Stops email clients resizing small text. */
			* {
				-ms-text-size-adjust: 100%;
				-webkit-text-size-adjust: 100%;
			}

			/* What it does: Centers email on Android 4.4 */
			div[style*="margin: 16px 0"] {
				margin: 0 !important;
			}

			/* What it does: Stops Outlook from adding extra spacing to tables. */
			table,
			td {
				mso-table-lspace: 0pt !important;
				mso-table-rspace: 0pt !important;
			}

			/* What it does: Fixes webkit padding issue. */
			table {
				border-spacing: 0 !important;
				border-collapse: collapse !important;
				table-layout: fixed !important;
				margin: 0 auto !important;
			}

			/* What it does: Uses a better rendering method when resizing images in IE. */
			img {
				-ms-interpolation-mode: bicubic;
			}

			/* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
			a {
				text-decoration: none;
			}

			/* What it does: A work-around for email clients meddling in triggered links. */
			*[x-apple-data-detectors],
			/* iOS */
			.unstyle-auto-detected-links *,
			.aBn {
				border-bottom: 0 !important;
				cursor: default !important;
				color: inherit !important;
				text-decoration: none !important;
				font-size: inherit !important;
				font-family: inherit !important;
				font-weight: inherit !important;
				line-height: inherit !important;
			}

			/* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
			.a6S {
				display: none !important;
				opacity: 0.01 !important;
			}

			/* What it does: Prevents Gmail from changing the text color in conversation threads. */
			.im {
				color: inherit !important;
			}

			/* If the above doesn't work, add a .g-img class to any image in question. */
			img.g-img+div {
				display: none !important;
			}

			/* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
			/* Create one of these media queries for each additional viewport size you'd like to fix */

			/* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
			@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
				u~div .email-container {
					min-width: 320px !important;
				}
			}

			/* iPhone 6, 6S, 7, 8, and X */
			@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
				u~div .email-container {
					min-width: 375px !important;
				}
			}

			/* iPhone 6+, 7+, and 8+ */
			@media only screen and (min-device-width: 414px) {
				u~div .email-container {
					min-width: 414px !important;
				}
			}
		</style>

		<!-- CSS Reset : END -->

		<!-- Progressive Enhancements : BEGIN -->
		<style>
			.primary {
				background: #0d0cb5;
			}

			.blur {
				/* background: url(img/Blur.png); */
				background-color: #222222;
				opacity: 0.98;
			}

			.bg_white {
				background: #ffffff;
			}

			.bg_light {
				background: #fafafa;
			}

			.bg_black {
				background: #000000;
			}

			.bg_dark {
				background: rgba(0, 0, 0, .8);
			}

			.email-section {
				padding: 2.5em;
			}

			/*BUTTON*/
			.btn {
				padding: 5px 15px;
				display: inline-block;
			}

			.btn.btn-primary {
				border-radius: 5px;
				background: #0d0cb5;
				color: #ffffff;
			}

			.btn.btn-white {
				border-radius: 5px;
				background: #ffffff;
				color: #000000;
			}

			.btn.btn-white-outline {
				border-radius: 5px;
				background: #CAFF87;
				border: 1px solid #fff;
				color: black;
				padding: 24px 36px;
			}

			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				font-family: 'Poppins', sans-serif;
				color: #000000;
				margin-top: 0;
			}

			body {
				font-family: 'Poppins', sans-serif;
				font-weight: 400;
				font-size: 15px;
				line-height: 1.8;
				color: rgba(0, 0, 0, .4);
			}

			a {
				color: #0d0cb5;
			}

			table {}

			.box-table {
				max-width: 560px;
			}

			.hero-table {
				max-width: 838px;
				height: 250px;
			}

			.hero-table td {
				background-color: white;
			}

			.box-table td:first-child {
				width: 180px;
			}

			/*LOGO*/

			.logo h1 {
				margin: 0;
			}

			.logo h1 a {
				color: #000000;
				font-size: 20px;
				font-weight: 700;
				text-transform: uppercase;
				font-family: 'Poppins', sans-serif;
			}

			.navigation {
				padding: 0;
			}

			.navigation li {
				list-style: none;
				display: inline-block;
				;
				margin-left: 5px;
				font-size: 13px;
				font-weight: 500;
			}

			.navigation li a {
				color: rgba(0, 0, 0, .4);
			}

			/*HERO*/
			.hero {
				position: relative;
				z-index: 0;
			}

			.hero .overlay {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				content: '';
				width: 100%;
				background: #02B68A;
				z-index: -1;
				height: 735px;
			}

			.hero .icon {}

			.hero .icon a {
				display: block;
				width: 60px;
				margin: 0 auto;
			}

			.hero .text {
				color: rgba(255, 255, 255, .8);
			}

			.hero .text h2 {
				color: #ffffff;
				margin-bottom: 0;
			}


			/*HEADING SECTION*/
			.heading-section {}

			.heading-section h2 {
				color: #000000;
				font-size: 20px;
				margin-top: 0;
				line-height: 1.4;
				font-weight: 700;
				text-transform: uppercase;
			}

			.heading-section .subheading {
				margin-bottom: 20px !important;
				display: inline-block;
				font-size: 13px;
				text-transform: uppercase;
				letter-spacing: 2px;
				color: rgba(0, 0, 0, .4);
				position: relative;
			}

			.heading-section .subheading::after {
				position: absolute;
				left: 0;
				right: 0;
				bottom: -10px;
				content: '';
				width: 100%;
				height: 2px;
				background: #0d0cb5;
				margin: 0 auto;
			}

			.heading-section-white {
				color: rgba(255, 255, 255, .8);
			}

			.heading-section-white h2 {
				font-family:
					line-height: 1;
				padding-bottom: 0;
			}

			.heading-section-white h2 {
				color: #ffffff;
			}

			.heading-section-white .subheading {
				margin-bottom: 0;
				display: inline-block;
				font-size: 13px;
				text-transform: uppercase;
				letter-spacing: 2px;
				color: rgba(255, 255, 255, .4);
			}


			.icon {
				text-align: center;
			}

			.icon img {}


			/*SERVICES*/
			.services {
				background: rgba(0, 0, 0, .03);
			}

			.text-services {
				padding: 10px 10px 0;
				text-align: center;
			}

			.text-services h3 {
				font-size: 16px;
				font-weight: 600;
			}

			.services-list {
				padding: 0;
				margin: 0 0 20px 0;
				width: 100%;
				float: left;
			}

			.services-list img {
				float: left;
			}

			.services-list .text {
				width: calc(100% - 60px);
				float: right;
			}

			.services-list h3 {
				margin-top: 0;
				margin-bottom: 0;
			}

			.services-list p {
				margin: 0;
			}

			/*BLOG*/
			.text-services .meta {
				text-transform: uppercase;
				font-size: 14px;
			}

			/*TESTIMONY*/
			.text-testimony .name {
				margin: 0;
			}

			.text-testimony p {
				font-size: 20px;
				font-weight: 400;
				line-height: 28px;
				text-align: left;
			}

			.text-testimony .position {
				color: rgba(0, 0, 0, .3);

			}


			/*VIDEO*/
			.img {
				width: 100%;
				height: auto;
				position: relative;
			}

			.img .icon {
				position: absolute;
				top: 50%;
				left: 0;
				right: 0;
				bottom: 0;
				margin-top: -25px;
			}

			.img .icon a {
				display: block;
				width: 60px;
				position: absolute;
				top: 0;
				left: 50%;
				margin-left: -25px;
			}



			/*COUNTER*/
			.counter {
				width: 100%;
				position: relative;
				z-index: 0;
			}

			.counter .overlay {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				content: '';
				width: 100%;
				background: #000000;
				z-index: -1;
				opacity: .3;
			}

			.counter-text {
				text-align: center;
			}

			.counter-text .num {
				display: block;
				color: #ffffff;
				font-size: 34px;
				font-weight: 700;
			}

			.counter-text .name {
				display: block;
				color: rgba(255, 255, 255, .9);
				font-size: 13px;
			}

			@media screen and (max-width: 500px) {

				.icon {
					text-align: left;
				}

				.text-services {
					padding-left: 0;
					padding-right: 20px;
					text-align: left;
				}

			}
		</style>
		<style>
			.img-text-box {
				display: inline-block;
				margin: 20px;
				width: 45%;
			}

			.img-text-box div {
				display: inline-grid;
				vertical-align: middle;
				margin: 10px;
			}

			.img-text-box div:last-child {
				width: 50%;
			}

			h2.hero-heading {
				font-size: 92px !important;
				line-height: 112px !important;
				font-weight: 600 !important;
			}

			h3.score-heading {
				font-size: 58px;
				line-height: 64px;
				font-weight: 600;
				margin-bottom: 30px;
			}

			h2.price-heading {
				font-size: 48px !important;
				line-height: 56px !important;
				font-weight: 400 !important;
			}

			h2.unlock-heading {
				font-size: 58px !important;
				line-height: 64px !important;
				font-weight: 600 !important;
			}

			.cover {
				top: 574px !important;
			}

			.desktop {
				display: block !important;
			}

			.mobile {
				display: none !important;
			}

			@media screen and (max-width: 768px) {
				.desktop {
					display: block !important;
				}

				h2.hero-heading {
					font-size: 58px !important;
					line-height: 64px !important;
					font-weight: 600 !important;
					margin-top: 20px !important;
					margin-bottom: 30px !important;
				}

				h3.score-heading {
					font-size: 38px !important;
					line-height: 48px !important;
					font-weight: 600 !important;
					margin-bottom: 0px !important;
				}

				h2.price-heading {
					font-size: 26px !important;
					line-height: 32px !important;
					font-weight: 400 !important;
				}

				h2.unlock-heading {
					font-size: 38px !important;
					line-height: 48px !important;
					font-weight: 600 !important;
				}

				.schore-text {
					font-size: 14px !important;
				}

				.text-testimony p {
					font-size: 16px !important;
				}
			}


			@media screen and (max-width: 450px) {
				.desktop {
					display: none !important;
				}

				.mobile {
					display: block !important;
				}

				.logo img {
					width: 100px !important;
				}

				.text {
					padding: 0px !important;
				}

				.text p {
					font-size: 16px !important;
					line-height: 24px !important;
					margin-left: 0px !important;
					margin-bottom: 0px !important;
					padding: 0px 10px !important;
				}

				.logo a {
					font-size: 16px !important;
				}

				.hero-table {
					height: 344px !important;
					margin: 20px !important;
				}

				h2.hero-heading {
					font-size: 38px !important;
					line-height: 48px !important;
					font-weight: 600 !important;
					margin-top: 20px !important;
					margin-bottom: 10px !important;
				}

				h2.name-heading {
					font-size: 26px !important;
					line-height: 32px in !important;
				}

				h3.score-heading {
					font-size: 32px !important;
					line-height: 40px !important;
					font-weight: 600 !important;
					margin-bottom: 0px !important;
					margin: 10px 0px !important;
				}

				.convered-img {
					margin-top: 80px !important;
				}

				.cover {
					top: 586px !important;
				}

				.heading-section-white {
					padding: 0px !important;
				}

				h2.price-heading {
					font-size: 26px !important;
					line-height: 32px !important;
					font-weight: 400 !important;
				}

				h2.unlock-heading {
					font-size: 18px !important;
					line-height: 24px !important;
					font-weight: 600 !important;
					padding-top: 15px;
				}

				.schore-text {
					font-size: 14px !important;
				}

				.text-testimony p {
					font-size: 16px !important;
					text-align: center !important;
				}

				.img-text-box {
					width: 90% !important;
				}

				.img-text-box div:last-child {
					width: 100% !important;
				}

				.btn.btn-white-outline {
					width: 75% !important;
				}

				.email-section {
					padding: 0px !important;
				}
			}
		</style>


	</head>

	<body width="100%"
		style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;">
		<center style="width: 100%; background-color: #f1f1f1;">
			<div
				style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
				&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
			</div>
			<div style="max-width: 1440px; margin: 0 auto; height: 815px;" class="email-container">
				<!-- BEGIN BODY -->
				<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
					style="margin: auto;">
					<tr>
						<td valign="top" class="bg_white"
							style="padding: 0em 2.5em; height: 80px;     vertical-align: middle;">
							<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
								<tr>
									<td width="40%" class="logo" style="text-align: left;">
										<a style="font-size: 20px;" href="#">
											<img src="../img/Logo.png" </a>
									</td>
									<td width="60%" class="logo" style="text-align: right;">
										<ul class="navigation">
											<li><a href="#"
													style=" font-size: 20px; line-height: 28px; font-weight: 400;">GROWTH
													Assessment</a></li>
										</ul>
									</td>
								</tr>
							</table>
						</td>
					</tr><!-- end tr -->
					<tr>
						<td valign="middle" class="hero bg_white"
							style="background-image: url(../images/bg_1.jpg); background-size: cover; height: 400px;">
							<div class="overlay"></div>
							<table>
								<tr>
									<td>
										<div class="text"
											style="padding: 0 3em; text-align: center; padding-top: 65px;">
											<h2 class="hero-heading">
												Congratulations</h2>
											<h2 class="name-heading"
												style="font-size: 48px; line-height: 56px; font-weight: 400;">John Smith
											</h2>
											<p
												style="font-size: 20px; line-height: 28px; font-weight: 400; margin-bottom: 50px;">
												on completing the Glo-raise GROWTH assessment<br />
												– the premier business attractiveness assessment globally.</p>

											<table class="hero-table desktop"
												style="border-collapse: collapse; border-radius: 10px;">
												<tr>
													<td class="text-testimony heading-section-white"
														style="text-align: center; vertical-align: top; padding-top: 40px;">
														<h3 class="score-heading">
															Your score is</h3>
														<p class="schore-text"
															style="    margin-left: 50px; font-size: 16px; line-height: 24px; color: black; padding:0px;">
															Scores range from Level 1 (lowest) to Level 5 (highest) with
															Level 5 most closely aligning with the factors known to
															drive entrepreneurial success.</p>
													</td>
													<td>
														<img src="../img/One.png">
													</td>

												</tr>
											</table>
											<table style="display: none" class="hero-table mobile">
												<tbody>
													<tr>
														<td>
															<h3 class="score-heading">Your score is</h3>
															<img src="../img/one-horizental.png">
															<p class="schore-text"
																style="    margin-left: 50px; font-size: 16px; line-height: 24px; color: black; padding:0px;">
																Scores range from Level 1 (lowest) to Level 5 (highest)
																with
																Level 5 most closely aligning with the factors known to
																drive entrepreneurial success.</p>
														</td>
													</tr>
												</tbody>

										</div>

			</div>
			</td>
			</tr>
			</table>
			<img class="desktop" style="position: absolute; z-index: -1;	margin-top: -379px;	left: -30px;"
				src="../img/Vector-54.png" />
			<img class="mobile" style="position: absolute; z-index: -1;	width: 100%;margin-top: -100px;"
				src="../img/Vector-full-54 (1).png" />
			</td>
			</tr><!-- end tr -->
			</table>
			</div>
			<div class="convered-img" style="height: 620px; overflow: hidden;     filter: blur(5px);">
				<img src="../img/Blur.png" style="width: 100%;" />
			</div>
			<div class="cover" style=" position: absolute; top: 657px; left: -1px; opacity: 0.95;"
				class="email-container">
				<table>
					<tr>
						<td>
							<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">


								<tr>
									<td class="blur email-section" style="text-align:center;">
										<div class="heading-section heading-section-white"
											style="text-align: center; padding: 0 30px;">
											<h2 class="unlock-heading">
												Unlock your complete Glo-raise GROWTH™ score</h2>

										</div>
										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape1.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">

												<p>visualization breakdown of the % of founders per region</p>
											</div>
										</div>

										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape3.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">
												<p>examples of eventual unicorns from each level</p>

											</div>
										</div>

										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape4.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">
												<p>personalized action report based on your responses to help you drive
													next-level GROWTH</p>

											</div>
										</div>

										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape2.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">

												<p>overall level for all founders globally and the % of founders scoring
													in each level</p>
											</div>
										</div>
										<div class="heading-section heading-section-white">
											<h2 class="price-heading">limited time just $29 ($300 value)</h2>
											<p><a href="#" class="btn btn-white-outline"
													style="font-size: 20px; line-height: 28px; font-weight: 400;">Unlock</a>
											</p>
										</div>
									</td>
								</tr>
							</table>

						</td>
					</tr><!-- end:tr -->
					<!-- 1 Column Text + Button : END -->
				</table>
			</div>
			</div>

		</center>
	</body>

</html>`;
};
export const fourthFree = ({ name }) => {
  return `<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
	xmlns:o="urn:schemas-microsoft-com:office:office">

	<head>
		<meta charset="utf-8"> <!-- utf-8 works for most cases -->
		<meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<!-- Use the latest (edge) version of IE rendering engine -->
		<meta name="x-apple-disable-message-reformatting"> <!-- Disable auto-scale in iOS 10 Mail entirely -->
		<title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->

		<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">

		<!-- CSS Reset : BEGIN -->
		<style>
			html,
			body {
				margin: 0 auto !important;
				padding: 0 !important;
				height: 100% !important;
				width: 100% !important;
				background: #f1f1f1;
			}

			/* What it does: Stops email clients resizing small text. */
			* {
				-ms-text-size-adjust: 100%;
				-webkit-text-size-adjust: 100%;
			}

			/* What it does: Centers email on Android 4.4 */
			div[style*="margin: 16px 0"] {
				margin: 0 !important;
			}

			/* What it does: Stops Outlook from adding extra spacing to tables. */
			table,
			td {
				mso-table-lspace: 0pt !important;
				mso-table-rspace: 0pt !important;
			}

			/* What it does: Fixes webkit padding issue. */
			table {
				border-spacing: 0 !important;
				border-collapse: collapse !important;
				table-layout: fixed !important;
				margin: 0 auto !important;
			}

			/* What it does: Uses a better rendering method when resizing images in IE. */
			img {
				-ms-interpolation-mode: bicubic;
			}

			/* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
			a {
				text-decoration: none;
			}

			/* What it does: A work-around for email clients meddling in triggered links. */
			*[x-apple-data-detectors],
			/* iOS */
			.unstyle-auto-detected-links *,
			.aBn {
				border-bottom: 0 !important;
				cursor: default !important;
				color: inherit !important;
				text-decoration: none !important;
				font-size: inherit !important;
				font-family: inherit !important;
				font-weight: inherit !important;
				line-height: inherit !important;
			}

			/* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
			.a6S {
				display: none !important;
				opacity: 0.01 !important;
			}

			/* What it does: Prevents Gmail from changing the text color in conversation threads. */
			.im {
				color: inherit !important;
			}

			/* If the above doesn't work, add a .g-img class to any image in question. */
			img.g-img+div {
				display: none !important;
			}

			/* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
			/* Create one of these media queries for each additional viewport size you'd like to fix */

			/* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
			@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
				u~div .email-container {
					min-width: 320px !important;
				}
			}

			/* iPhone 6, 6S, 7, 8, and X */
			@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
				u~div .email-container {
					min-width: 375px !important;
				}
			}

			/* iPhone 6+, 7+, and 8+ */
			@media only screen and (min-device-width: 414px) {
				u~div .email-container {
					min-width: 414px !important;
				}
			}
		</style>

		<!-- CSS Reset : END -->

		<!-- Progressive Enhancements : BEGIN -->
		<style>
			.primary {
				background: #0d0cb5;
			}

			.blur {
				/* background: url(img/Blur.png); */
				background-color: #222222;
				opacity: 0.98;
			}

			.bg_white {
				background: #ffffff;
			}

			.bg_light {
				background: #fafafa;
			}

			.bg_black {
				background: #000000;
			}

			.bg_dark {
				background: rgba(0, 0, 0, .8);
			}

			.email-section {
				padding: 2.5em;
			}

			/*BUTTON*/
			.btn {
				padding: 5px 15px;
				display: inline-block;
			}

			.btn.btn-primary {
				border-radius: 5px;
				background: #0d0cb5;
				color: #ffffff;
			}

			.btn.btn-white {
				border-radius: 5px;
				background: #ffffff;
				color: #000000;
			}

			.btn.btn-white-outline {
				border-radius: 5px;
				background: #CAFF87;
				border: 1px solid #fff;
				color: black;
				padding: 24px 36px;
			}

			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				font-family: 'Poppins', sans-serif;
				color: #000000;
				margin-top: 0;
			}

			body {
				font-family: 'Poppins', sans-serif;
				font-weight: 400;
				font-size: 15px;
				line-height: 1.8;
				color: rgba(0, 0, 0, .4);
			}

			a {
				color: #0d0cb5;
			}

			table {}

			.box-table {
				max-width: 560px;
			}

			.hero-table {
				max-width: 838px;
				height: 250px;
			}

			.hero-table td {
				background-color: white;
			}

			.box-table td:first-child {
				width: 180px;
			}

			/*LOGO*/

			.logo h1 {
				margin: 0;
			}

			.logo h1 a {
				color: #000000;
				font-size: 20px;
				font-weight: 700;
				text-transform: uppercase;
				font-family: 'Poppins', sans-serif;
			}

			.navigation {
				padding: 0;
			}

			.navigation li {
				list-style: none;
				display: inline-block;
				;
				margin-left: 5px;
				font-size: 13px;
				font-weight: 500;
			}

			.navigation li a {
				color: rgba(0, 0, 0, .4);
			}

			/*HERO*/
			.hero {
				position: relative;
				z-index: 0;
			}

			.hero .overlay {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				content: '';
				width: 100%;
				background: #02B68A;
				z-index: -1;
				height: 735px;
			}

			.hero .icon {}

			.hero .icon a {
				display: block;
				width: 60px;
				margin: 0 auto;
			}

			.hero .text {
				color: rgba(255, 255, 255, .8);
			}

			.hero .text h2 {
				color: #ffffff;
				margin-bottom: 0;
			}


			/*HEADING SECTION*/
			.heading-section {}

			.heading-section h2 {
				color: #000000;
				font-size: 20px;
				margin-top: 0;
				line-height: 1.4;
				font-weight: 700;
				text-transform: uppercase;
			}

			.heading-section .subheading {
				margin-bottom: 20px !important;
				display: inline-block;
				font-size: 13px;
				text-transform: uppercase;
				letter-spacing: 2px;
				color: rgba(0, 0, 0, .4);
				position: relative;
			}

			.heading-section .subheading::after {
				position: absolute;
				left: 0;
				right: 0;
				bottom: -10px;
				content: '';
				width: 100%;
				height: 2px;
				background: #0d0cb5;
				margin: 0 auto;
			}

			.heading-section-white {
				color: rgba(255, 255, 255, .8);
			}

			.heading-section-white h2 {
				font-family:
					line-height: 1;
				padding-bottom: 0;
			}

			.heading-section-white h2 {
				color: #ffffff;
			}

			.heading-section-white .subheading {
				margin-bottom: 0;
				display: inline-block;
				font-size: 13px;
				text-transform: uppercase;
				letter-spacing: 2px;
				color: rgba(255, 255, 255, .4);
			}


			.icon {
				text-align: center;
			}

			.icon img {}


			/*SERVICES*/
			.services {
				background: rgba(0, 0, 0, .03);
			}

			.text-services {
				padding: 10px 10px 0;
				text-align: center;
			}

			.text-services h3 {
				font-size: 16px;
				font-weight: 600;
			}

			.services-list {
				padding: 0;
				margin: 0 0 20px 0;
				width: 100%;
				float: left;
			}

			.services-list img {
				float: left;
			}

			.services-list .text {
				width: calc(100% - 60px);
				float: right;
			}

			.services-list h3 {
				margin-top: 0;
				margin-bottom: 0;
			}

			.services-list p {
				margin: 0;
			}

			/*BLOG*/
			.text-services .meta {
				text-transform: uppercase;
				font-size: 14px;
			}

			/*TESTIMONY*/
			.text-testimony .name {
				margin: 0;
			}

			.text-testimony p {
				font-size: 20px;
				font-weight: 400;
				line-height: 28px;
				text-align: left;
			}

			.text-testimony .position {
				color: rgba(0, 0, 0, .3);

			}


			/*VIDEO*/
			.img {
				width: 100%;
				height: auto;
				position: relative;
			}

			.img .icon {
				position: absolute;
				top: 50%;
				left: 0;
				right: 0;
				bottom: 0;
				margin-top: -25px;
			}

			.img .icon a {
				display: block;
				width: 60px;
				position: absolute;
				top: 0;
				left: 50%;
				margin-left: -25px;
			}



			/*COUNTER*/
			.counter {
				width: 100%;
				position: relative;
				z-index: 0;
			}

			.counter .overlay {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				content: '';
				width: 100%;
				background: #000000;
				z-index: -1;
				opacity: .3;
			}

			.counter-text {
				text-align: center;
			}

			.counter-text .num {
				display: block;
				color: #ffffff;
				font-size: 34px;
				font-weight: 700;
			}

			.counter-text .name {
				display: block;
				color: rgba(255, 255, 255, .9);
				font-size: 13px;
			}

			@media screen and (max-width: 500px) {

				.icon {
					text-align: left;
				}

				.text-services {
					padding-left: 0;
					padding-right: 20px;
					text-align: left;
				}

			}
		</style>
		<style>
			.img-text-box {
				display: inline-block;
				margin: 20px;
				width: 45%;
			}

			.img-text-box div {
				display: inline-grid;
				vertical-align: middle;
				margin: 10px;
			}

			.img-text-box div:last-child {
				width: 50%;
			}

			h2.hero-heading {
				font-size: 92px !important;
				line-height: 112px !important;
				font-weight: 600 !important;
			}

			h3.score-heading {
				font-size: 58px;
				line-height: 64px;
				font-weight: 600;
				margin-bottom: 30px;
			}

			h2.price-heading {
				font-size: 48px !important;
				line-height: 56px !important;
				font-weight: 400 !important;
			}

			h2.unlock-heading {
				font-size: 58px !important;
				line-height: 64px !important;
				font-weight: 600 !important;
			}

			.cover {
				top: 574px !important;
			}

			.desktop {
				display: block !important;
			}

			.mobile {
				display: none !important;
			}

			@media screen and (max-width: 768px) {
				.desktop {
					display: block !important;
				}

				h2.hero-heading {
					font-size: 58px !important;
					line-height: 64px !important;
					font-weight: 600 !important;
					margin-top: 20px !important;
					margin-bottom: 30px !important;
				}

				h3.score-heading {
					font-size: 38px !important;
					line-height: 48px !important;
					font-weight: 600 !important;
					margin-bottom: 0px !important;
				}

				h2.price-heading {
					font-size: 26px !important;
					line-height: 32px !important;
					font-weight: 400 !important;
				}

				h2.unlock-heading {
					font-size: 38px !important;
					line-height: 48px !important;
					font-weight: 600 !important;
				}

				.schore-text {
					font-size: 14px !important;
				}

				.text-testimony p {
					font-size: 16px !important;
				}
			}


			@media screen and (max-width: 450px) {
				.desktop {
					display: none !important;
				}

				.mobile {
					display: block !important;
				}

				.logo img {
					width: 100px !important;
				}

				.text {
					padding: 0px !important;
				}

				.text p {
					font-size: 16px !important;
					line-height: 24px !important;
					margin-left: 0px !important;
					margin-bottom: 0px !important;
					padding: 0px 10px !important;
				}

				.logo a {
					font-size: 16px !important;
				}

				.hero-table {
					height: 344px !important;
					margin: 20px !important;
				}

				h2.hero-heading {
					font-size: 38px !important;
					line-height: 48px !important;
					font-weight: 600 !important;
					margin-top: 20px !important;
					margin-bottom: 10px !important;
				}

				h2.name-heading {
					font-size: 26px !important;
					line-height: 32px in !important;
				}

				h3.score-heading {
					font-size: 32px !important;
					line-height: 40px !important;
					font-weight: 600 !important;
					margin-bottom: 0px !important;
					margin: 10px 0px !important;
				}

				.convered-img {
					margin-top: 80px !important;
				}

				.cover {
					top: 586px !important;
				}

				.heading-section-white {
					padding: 0px !important;
				}

				h2.price-heading {
					font-size: 26px !important;
					line-height: 32px !important;
					font-weight: 400 !important;
				}

				h2.unlock-heading {
					font-size: 18px !important;
					line-height: 24px !important;
					font-weight: 600 !important;
					padding-top: 15px;
				}

				.schore-text {
					font-size: 14px !important;
				}

				.text-testimony p {
					font-size: 16px !important;
					text-align: center !important;
				}

				.img-text-box {
					width: 90% !important;
				}

				.img-text-box div:last-child {
					width: 100% !important;
				}

				.btn.btn-white-outline {
					width: 75% !important;
				}

				.email-section {
					padding: 0px !important;
				}
			}
		</style>


	</head>

	<body width="100%"
		style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;">
		<center style="width: 100%; background-color: #f1f1f1;">
			<div
				style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
				&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
			</div>
			<div style="max-width: 1440px; margin: 0 auto; height: 815px;" class="email-container">
				<!-- BEGIN BODY -->
				<table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%"
					style="margin: auto;">
					<tr>
						<td valign="top" class="bg_white"
							style="padding: 0em 2.5em; height: 80px;     vertical-align: middle;">
							<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
								<tr>
									<td width="40%" class="logo" style="text-align: left;">
										<a style="font-size: 20px;" href="#">
											<img src="../img/Logo.png" </a>
									</td>
									<td width="60%" class="logo" style="text-align: right;">
										<ul class="navigation">
											<li><a href="#"
													style=" font-size: 20px; line-height: 28px; font-weight: 400;">GROWTH
													Assessment</a></li>
										</ul>
									</td>
								</tr>
							</table>
						</td>
					</tr><!-- end tr -->
					<tr>
						<td valign="middle" class="hero bg_white"
							style="background-image: url(../images/bg_1.jpg); background-size: cover; height: 400px;">
							<div class="overlay"></div>
							<table>
								<tr>
									<td>
										<div class="text"
											style="padding: 0 3em; text-align: center; padding-top: 65px;">
											<h2 class="hero-heading">
												Congratulations</h2>
											<h2 class="name-heading"
												style="font-size: 48px; line-height: 56px; font-weight: 400;">John Smith
											</h2>
											<p
												style="font-size: 20px; line-height: 28px; font-weight: 400; margin-bottom: 50px;">
												on completing the Glo-raise GROWTH assessment<br />
												– the premier business attractiveness assessment globally.</p>

											<table class="hero-table desktop"
												style="border-collapse: collapse; border-radius: 10px;">
												<tr>
													<td class="text-testimony heading-section-white"
														style="text-align: center; vertical-align: top; padding-top: 40px;">
														<h3 class="score-heading">
															Your score is</h3>
														<p class="schore-text"
															style="    margin-left: 50px; font-size: 16px; line-height: 24px; color: black; padding:0px;">
															Scores range from Level 1 (lowest) to Level 5 (highest) with
															Level 5 most closely aligning with the factors known to
															drive entrepreneurial success.</p>
													</td>
													<td>
														<img src="../img/One.png">
													</td>

												</tr>
											</table>
											<table style="display: none" class="hero-table mobile">
												<tbody>
													<tr>
														<td>
															<h3 class="score-heading">Your score is</h3>
															<img src="../img/one-horizental.png">
															<p class="schore-text"
																style="    margin-left: 50px; font-size: 16px; line-height: 24px; color: black; padding:0px;">
																Scores range from Level 1 (lowest) to Level 5 (highest)
																with
																Level 5 most closely aligning with the factors known to
																drive entrepreneurial success.</p>
														</td>
													</tr>
												</tbody>

										</div>

			</div>
			</td>
			</tr>
			</table>
			<img class="desktop" style="position: absolute; z-index: -1;	margin-top: -379px;	left: -30px;"
				src="../img/Vector-54.png" />
			<img class="mobile" style="position: absolute; z-index: -1;	width: 100%;margin-top: -100px;"
				src="../img/Vector-full-54 (1).png" />
			</td>
			</tr><!-- end tr -->
			</table>
			</div>
			<div class="convered-img" style="height: 620px; overflow: hidden;     filter: blur(5px);">
				<img src="../img/Blur.png" style="width: 100%;" />
			</div>
			<div class="cover" style=" position: absolute; top: 657px; left: -1px; opacity: 0.95;"
				class="email-container">
				<table>
					<tr>
						<td>
							<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">


								<tr>
									<td class="blur email-section" style="text-align:center;">
										<div class="heading-section heading-section-white"
											style="text-align: center; padding: 0 30px;">
											<h2 class="unlock-heading">
												Unlock your complete Glo-raise GROWTH™ score</h2>

										</div>
										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape1.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">

												<p>visualization breakdown of the % of founders per region</p>
											</div>
										</div>

										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape3.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">
												<p>examples of eventual unicorns from each level</p>

											</div>
										</div>

										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape4.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">
												<p>personalized action report based on your responses to help you drive
													next-level GROWTH</p>

											</div>
										</div>

										<div class="img-text-box">
											<div>
												<img src="../Icon/Shape2.png" alt=""
													style="width: 100%; max-width: 110px; height: auto; margin: auto; margin-bottom: 20px; display: block;">
											</div>
											<div class="text-testimony heading-section-white"
												style="text-align: center;">

												<p>overall level for all founders globally and the % of founders scoring
													in each level</p>
											</div>
										</div>
										<div class="heading-section heading-section-white">
											<h2 class="price-heading">limited time just $29 ($300 value)</h2>
											<p><a href="#" class="btn btn-white-outline"
													style="font-size: 20px; line-height: 28px; font-weight: 400;">Unlock</a>
											</p>
										</div>
									</td>
								</tr>
							</table>

						</td>
					</tr><!-- end:tr -->
					<!-- 1 Column Text + Button : END -->
				</table>
			</div>
			</div>

		</center>
	</body>

</html>`;
};