
	<div id="bottom-stitch"></div>

		<div class="wrap footer">
			<div class="row footerblock">

			</div> <!--  -->

			<div class="wrap footerbottom">


			</div>

		</div>

	<?php include_once "devtools/_devtools.php"; ?>

	<script src="./src/scripts/vendor/requirejs/require.js"></script>

	<script>
		require(['./src/scripts/core'], function () {
			require(['home']);
		});
	</script>

</body>
</html>
