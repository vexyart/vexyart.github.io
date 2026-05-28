The **Spiral** fill type in Vexy Lines produces a continuous spiral engraving using one smooth line. Use this fill for a clean, mechanical engraving effect in your design.

![um-tmpl-spiral.svg](../media/doc360/Images/um-tmpl-spiral.svg){width="300"}

## Fill Parameters
![image](../media/image-0O7xFO.png){width="300"}

![Interval](../media/doc360/Images/sm-interval.svg) **Interval** ([units](/v1/docs/units)): Sets the distance between each turn of the spiral. Use a lower value for a tighter engraving and a higher value for more space.

![Interval](../media/doc360/Images/sm-dispersion.svg) **Interval Randomization** (%): Adds a small random variation to the spacing for a slightly hand-crafted look.

![Stroke Shift](../media/doc360/Images/sm-middle.svg) **Stroke Shift**: Adjusts the starting point of the spiral turns.

![Center](../media/doc360/Images/center_x.svg) **Center** ([units](/v1/docs/units)): Determines the center point from which the engraving begins.
<!--@SSJY-->
![spiral-dir-cw](../media/spiral-dir-cw.svg) **Direction (CW)**: Set the spiral direction to clockwise.  

![spiral-dir-ccw](../media/spiral-dir-ccw.svg) **Direction (CCW)**: Set the spiral direction to counterclockwise.


These parameters let you fine-tune the engraving to suit your design.

## Add and Customize a Spiral Fill

To create a new Spiral fill, follow the steps in our [Add a Fill](vb://article/adding-a-fill-1) guide and select **Spiral**.

![image.jpeg](../media/doc360/Images/image(74).png){width="160"}

Fine-tuning your Spiral fill involves adjusting its parameters. Here's a simple guide:

1. Access Properties: Go to the **Properties** panel, usually on the right side of the Vexy Lines interface.

2. Locate Parameter: In the Properties panel, switch to the **SPIRAL FILL** tab and find the parameter you wish to adjust.

Feel free to experiment with these parameters to create unique and dynamic engraving patterns for your vector artwork.

### Interval
1. Find the **Interval** ![Interval](../media/doc360/Images/sm-interval.svg) parameter.
2. Adjust the distance using the slider or by typing a value.

| interval: 1 | interval: 2 | interval: 3 |
| --- | --- | --- |
|![image.jpeg](../media/doc360/Images/image(114)-01.png){width="300"}|![image.jpeg](../media/external/cdn.document360.io/image(115).png){width="300"}|![image.jpeg](../media/external/cdn.document360.io/image(116)-01.png){width="300"}|

### Randomization
1. Find the **Randomization** ![Randomization](../media/doc360/Images/sm-dispersion.svg) parameter.
2. Adjust it to add variation to the spacing.
3. Higher values make the engraving less uniform.


| randomization: 10% | randomization: 50% | randomization: 100% |
| --- | --- | --- |
|![image.jpeg](../media/doc360/Images/image(117).png){width="300"}|![image.jpeg](../media/external/cdn.document360.io/image(118).png){width="300"}|![image.jpeg](../media/external/cdn.document360.io/image(121)-01.png){width="300"}|

### Shift
1. Find the **Shift** ![Stroke Shift](../media/doc360/Images/sm-middle.svg) parameter.
2. Adjust it to change the starting angle of the spiral.
3. This alters the overall orientation of the engraving.



| shift: 15% | shift: 50% | shift: 70% |
| --- | --- | --- |
|![image.jpeg](../media/doc360/Images/image(122).jpg){width="300"}|![image.jpeg](../media/external/cdn.document360.io/image(123).jpg){width="300"}|![image.jpeg](../media/external/cdn.document360.io/image(124).jpg){width="300"}|

<!--@BDFI{-->### Direction
1. Locate the **Direction** parameter.
2. Select the rotation direction: **CW** ![spiral-dir-cw](../media/spiral-dir-cw.svg) (clockwise) or **CCW** ![spiral-dir-ccw](../media/spiral-dir-ccw.svg) (counterclockwise).
3. Change this parameter as needed to reverse the rotation direction.<!--@BDFI}-->

| direction: CW | direction: CCW |
| --- | --- |
|![image](../media/image-Pbk2Vf.png){width="300"}|![image](../media/image-FgQien.png){width="300"}|


### Center
1. Find the **Center** ![Center](../media/doc360/Images/center_x.svg) parameter.
2. Set the horizontal and vertical coordinates to define the engraving's center.
3. You can adjust these values using the slider, entering them manually, or using the Interactive Center Locator.


| center: 40,40 | center: 80,0 | center: 40,80 |
| --- | --- | --- |
|![image.jpeg](../media/doc360/Images/image(77).png){width="300"}|![image.jpeg](../media/external/cdn.document360.io/image(78).png){width="300"}|![image.jpeg](../media/external/cdn.document360.io/image(79).png){width="300"}|

## Stroke Properties
Additional stroke properties include:
*   [Color](vb://article/color-5)
*   [Image Threshold](vb://article/image-threshold-2)
*   [Stroke Thickness](vb://article/stroke-thickness-2)
*   [Dashed Line](vb://article/dashed-line-1)
*   [Stroke Caps](vb://article/stroke-caps-1)
*   [Emboss](vb://article/emboss-1)
*   [Overlap Control](vb://article/overlap)

## Link to Example
You can use the example file [UM3-Fills-Spiral.lines](https://i.vexy.art/vl/examples/UM3-Fills-Spiral.lines) to practice adjusting Spiral fill settings.