<?php
/*
Template Name: Landing Page
*/
?>

<?php include_once( 'header.php' ); ?>


<div class="container herocontainer">


<?php
/*
|----------------------------------------------------------------------------------------------------------------------------
|
| SLIDER IMAGE LIST
|
|----------------------------------------------------------------------------------------------------------------------------
*/
?>

	<section class="wrap slider">

		<div class="wrap progress bg2">
			<div class="sliderprogress bg2 l10">
			</div>
		</div>

		<ul class="slides loading">
			<li style="background-image: url('./dist/images/hero/hero001.jpg');">
				&nbsp;
			</li>
			<li style="background-image: url('./dist/images/hero/hero004.jpg');">
				&nbsp;
			</li>
			<li style="background-image: url('./dist/images/hero/hero003.jpg');">
				&nbsp;
			</li>
		</ul>

	</section>

<?php
/*
|----------------------------------------------------------------------------------------------------------------------------
|
| SLIDER
|
|----------------------------------------------------------------------------------------------------------------------------
*/
?>

	<div class="wrap hero">

		<div class="row">

			<?php
				/*
				|
				| Slider Text
				|
				|-------------------------------------------------------------------------------------
				*/
				?>


				<div class="rel">

					<div class="small-12 medium-9 large-8 columns herotext">
						<h2>
							Lorem ipsum Aliqua dolor ea eiusmod
						</h2>
						<h3>
							Totam rem aperiam autem	vel eum iure reprehenderit
						</h3>
					</div>
					<div class="small-12 medium-3 large-4 columns hide-for-small">
						&nbsp;
					</div>



					<div class="small-12 medium-9 large-8 columns herotext">
						<h2>
							In dolore exercitation nulla est sit
						</h2>
						<h3>
							qui ratione voluptatem sequi nesciunt neque porro quisquam est
						</h3>
					</div>
					<div class="small-12 medium-3 large-4 columns hide-for-small">
						&nbsp;
					</div>



					<div class="small-12 medium-9 large-8 columns herotext">
						<h2>
							Deserunt ea incididunt non quis ad nostrud
						</h2>
						<h3>
							Eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
						</h3>
					</div>
				</div>
				<div class="small-12 medium-3 large-4 columns hide-for-small">
					&nbsp;
				</div>

			</div>

		</div>

	</div> <?php // ---- end Hero Container ?>


	<?php
	/*
	|
	| Call to action
	|
	|-------------------------------------------------------------------------------------
	*/
	?>

	<div class="container subcont">

		<div class="wrap subhero">

			<!-- slide controls -->
			<div class="row call slidetrack bg1 hide-for-small">
				<div class="small-12 medium-4 large-4 columns slidebar">

				</div>
			</div>

			<div class="row call slidecontrols bg1 hide-for-small">
				<div class="small-12 medium-4 large-4 columns bg1 slidebutton">
					<a href="#slide_1" class="pd">
						<h2 class="hide-for-small">
							Dolor velit
						</h2>
					</a>
				</div>
				<div class="small-12 medium-4 large-4 columns bg1 d5 slidebutton">
					<a href="#slide_2" class="pd">
						<h2 class="hide-for-small">
							Veniam nostrud
						</h2>
					</a>
				</div>
				<div class="small-12 medium-4 large-4 columns bg1 d10 slidebutton">
					<a href="#slide_3" class="pd">
						<h2 class="hide-for-small">
							Nisi non do deserunt
						</h2>
					</a>
				</div>
			</div>

			<!-- call to action blocks -->
			<div class="row call bg1 callblocks">

				<div id="call_1" class="small-12 medium-4 large-4 columns callblock bg1 l5">
					<h2 class="show-for-small">
						<a href="#" title="Emergency Case" class="tcw">
							Dolor velit
						</a>
					</h2>
					<div class="news">
						<p class="text tcw">
							Commodo Excepteur reprehenderit dolore velit fugiat do incididunt voluptate Ut tempor Ut sunt cupidatat aute irure et veniam nostrud dolor sed proident ea commodo.
						</p>
						<div class="row nicebtn">
							<a href="#" class="btn">Learn More</a>
						</div>
					</div>
				</div>


				<div id="call_2" class="small-12 medium-4 large-4 columns callblock bg1">
					<h2 class="show-for-small">
						<a href="#" title="Emergency Case" class="tcw">
							Veniam nostrud
						</a>
					</h2>
					<div class="news">
						<p class="text tcw">
							Voluptate adipisicing in officia elit elit sunt ex elit veniam in consequat deserunt id officia sed commodo ad in eu Excepteur pariatur ad sed Excepteur occaecat quis.
						</p>
						<div class="row nicebtn">
							<a href="#" class="btn">Learn More</a>
						</div>
				</div>
			</div>

			<div id="call_3" class="small-12 medium-4 large-4 columns callblock bg1 d5">
				<h2 class="show-for-small">
					<a href="#" title="Emergency Case" class="tcw">
						Nisi non do deserunt
					</a>
				</h2>
				<div class="news">
					<p class="text tcw">
						Dolor consectetur  velit consequat officia cillum dolore sint sed qui esse et do consectetur in ut consectetur elit consequat laborum proident nulla Duis aliqua commodo officia aliqua in irure culpa amet cupidatat quis anim laborum no.
					</p>
					<div class="row nicebtn">
						<a href="#" class="btn">Learn More</a>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>

<?php
/*
|----------------------------------------------------------------------------------------------------------------------------
|
| Testimonilas
|
|----------------------------------------------------------------------------------------------------------------------------
*/
?>


<div class="container content">

	<div class="wrap testimonials">

		<div class="row pane-top">
			<div class="small-12 medium-12 large-12 text-center">
				<h2>Some happy clients</h2>
			</div>
		</div>

		<div class="row pane-bottom">

			<div class="small-12 medium-4 large-4 columns pad m25">
				<p>Lorem ipsum Non tempor sit minim veniam Ut esse fugiat ex eiusmod proident quis officia commodo dolore id ullamco proident.</p>
				<p class="right"><em>- Alex Brittingham</em></p>
			</div>

			<div class="small-12 medium-4 large-4 columns pad m25">
				<p>Dolor nulla sed commodo dolore non ad nisi aliquip Excepteur ad sed labore dolore sunt in officia ullamco nisi aliqua dolor amet reprehenderit Duis mollit magna occaecat Ut Ut esse sed officia.</p>
				<p class="right"><em>- William Terry</em></p>
			</div>

			<div class="small-12 medium-4 large-4 columns pad m25">
				<p>Excepteur veniam enim in eiusmod pariatur dolore Excepteur incididunt incididunt enim.</p>
				<p class="right"><em>- Chris Wallace</em></p>
			</div>

		</div>
	</div>



<?php include_once( 'footer.php' ); ?>
