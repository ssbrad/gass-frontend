require 'zurb-foundation'

# Add support for repeating linear gradients
# https://github.com/chriseppstein/compass/issues/401
# Compass::BrowserSupport.add_support("repeating-linear-gradient", "webkit", "moz", "ms")
# Compass::BrowserSupport.add_support("function-name", "webkit", "moz", "ms", "o")
# Require any additional compass plugins here.
# require 'modular-scale'
# require 'bourbon'
# require 'compass-recipes'
# require 'sassy-math'
# require "fittext"
# require 'animate-sass'
# require 'sassy-buttons'
# require 'color-schemer'
# require 'toolkit'
# require 'harsh'
# require 'sass-mediaqueries-rails'
# require 'compass-blend-modes'


# environment = 		:development

# PRODUCTION SITE SETTINGS ARE PATH
# Set this to the root of your project when deployed:
http_path = "/"
http_images_path 	= 'dist/images'
http_fonts_path 	= 'dist/styles/fonts'


# DEVELOPMENT SITE SETTINGS ARE DIR
sass_dir 			= "src/sass"
css_dir 			= "dist/styles"
images_dir 			= "dist/images"
javascripts_dir 	= "dist/scripts"
fonts_dir			= "dist/styles/fonts"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
# output_style	= :compressed
output_style	= :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
