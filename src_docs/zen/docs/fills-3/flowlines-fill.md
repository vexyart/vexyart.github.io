# Flowlines Fill

Flowlines builds a direction field from the underlying curves (a map that stores the local line angle across the image), then traces a dense set of field-guided isolines to cover the area with continuous, “flowing” strokes. 

The result can resemble woodgrain, fluid motion, or topographic linework—lines that naturally wrap around forms instead of following a fixed global angle. Because the field is just an angle per point, you can rotate or invert it to generate counter-flow and clean cross-hatching (e.g., +45°, −45°, or any custom direction) while keeping the same underlying structure.


## Enable and Customize a Flowlines Fill

![flowlines-1](../media/flowlines-1.png){width="300"}

To enable the Flowlines mode for Handmade fill:

1. Select Handmade as the fill type.

2. Open the HANDMADE FILL tab.

3. Click the Flowlines button.

## Fill Parameters
![image](../media/image-T66otY.png){width="300"}

![Interval](../media/doc360/Images/sm-interval.svg) **Interval** ([units](/v1/docs/units)): Defines the spacing between flowlines. Lower values place the lines closer together, while higher values increase the distance between them.

![Randomization](../media/doc360/Images/sm-dispersion.svg) **Randomization** (%): Adds controlled randomness to the spacing of the flowlines, creating a more organic and natural-looking result.

![Smoothness](../media/doc360/Images/wireframe-smooth.svg) **Smoothness**: Adjusts how smoothly the flowlines follow their paths, reducing sharp transitions and producing cleaner, more fluid curves.

![Angle icon](../media/doc360/Images/sm-angle.svg) **Angle** (°): Sets the overall direction of the flowlines. Modify the angle to align them with the image structure or the desired visual flow.

![stroke-push](../media/stroke-push-jjBfm7.svg) **Push strength**(%): Controls how strongly strokes push through dense hatching, allowing them to extend deeper between nearby strokes.


### Interval
1. Find the **Interval** ![Interval](../media/doc360/Images/sm-interval.svg) parameter.
2. Adjust the value using the slider or enter it manually.

> Smaller intervals produce denser, darker flowlines with more detail, whereas larger intervals create a lighter appearance with reduced detail.

$ $

| interval: 1 | interval: 1.5 | interval: 2 |
| --- | --- | --- |
|![image](../media/image-S73v9W.png){width="300"}|![image](../media/image-K0cFcr.png){width="300"}|![image](../media/image-7cmKhY.png){width="300"}|


### Adjusting Randomization

1.  Locate the **Randomization** ![Randomization icon](../media/doc360/Images/sm-dispersion.svg) setting.
2.  Use the slider or enter a percentage value to introduce variation in stroke spacing.

| randomization: 10% | randomization: 50% | randomization: 100% |
| :----------------- | :----------------- | :------------------ |
|![image](../media/image-3zbPYX.png){width="300"}|![image](../media/image-ZP0quE.png){width="300"}|![image](../media/image-YXuCCb.png){width="300"}|



### Smoothness
1. Find the ![Smoothness](../media/doc360/Images/wireframe-smooth.svg) **Smoothness** option.
2. Adjust the value using the slider or by entering a number manually.
3. Higher values produce smoother transitions between the fill strokes.


### Adjusting Angle

1.  Find the **Angle** ![Angle icon](../media/doc360/Images/sm-angle.svg) setting.
2.  Use the circular dial control or enter a specific angle in degrees.


| angle: 0&deg; | angle: 90&deg; | angle: -45&deg; |
| :------------ | :------------ | :------------ |
|![image](../media/image-sAjyk8.png){width="300"}|![image](../media/image-sLmL9C.png){width="300"}|![image](../media/image-uVqNSm.png){width="300"}|


### Setting the Push <!--@Z7LM{-->Strength<!--@Z7LM}-->

1.  Find the **Push Strength** ![stroke-push](../media/stroke-push-jjBfm7.svg) parameter.
2.  Adjust the value using the control or enter a value manually.

Higher **Push Strength** lets strokes go farther between nearby strokes. Lower values make strokes stop sooner when they meet other lines, creating a denser and more controlled result.


| push strength: 0% |  push strength: 50% |  push strength: 100% |
| :------------ | :------------ | :------------ |
|![image](../media/image-qXzkTU.png){width="300"}|![image](../media/image-8O2zKx.png){width="300"}|![image](../media/image-xwsT6b.png){width="300"}|
   