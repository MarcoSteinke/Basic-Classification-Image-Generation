# Basic-Classification-Image-Generation
A simple tool which generates binary matrices including image pixel information without any colors.

## Introduction:
Use mouse events to draw low-quality images into the canvas (grid). Then use the UI to on the one hand
learn the gradient from the drawn image with a specific label. You can also use the UI to generate variations
from the originally drawn image. This is achieved by randomizing the original input.

The quality of the generated images will be improved long-term by implementing a RNN-like training proccess
which takes the generated image, tries to classify it and if it can not be classified it will not be added
to the data, but a new image will be generated and if it can be classified it will be added to the data
and the whole model will be retrained using all previous images including the latest one.

The main idea here is to build a simple image generator for low-quality images with up to 128x128 pixels and
no color.

