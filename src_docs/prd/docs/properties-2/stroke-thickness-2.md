Use the **STROKE THICKNESS** settings to adjust the thickness of your fill lines and the size of Halftone fill dots.



![image](../media/image-UyTrWB.png){width="280"}



> Note: This setting is not applicable to Text and Trace fills.

Here is an overview of the main settings:

![invert-mode](../media/invert-mode.svg) **Inverted Mode**: reverses thickness behavior so white strokes become thicker instead of darker ones.
![thickness-smoothing](../media/thickness-smoothing.svg) **Smoothing**: smooths transitions between thickness values for softer edges.
![thickness-break-mode](../media/thickness-break-mode-uobQuF.svg) **Line Break Mode**: controls whether new lines start with current or minimum thickness.
![thickness-auto-thin](../media/thickness-auto-thin.svg) **Auto-thin**: reduces stroke thickness in dense areas to improve clarity.
![thickness-wobble](../media/thickness-wobble.svg) **Wobble** (%): adds subtle hand-drawn variation for a more natural look.
![thickness-rough](../media/thickness-rough.svg) **Rough** (%): introduces fine texture to simulate dry or rough drawing materials.



## Stroke <!--@CVFH{-->Thickness<!--@CVFH}-->


Within the Stroke Thickness section of the Properties panel, you'll find one integrated widget for setting both minimum and maximum thickness values. The left control sets the minimum, the right control sets the maximum, and dragging the stroke in between adjusts both at once.


| thickness: 0 - 0.5 | thickness: 0 - 1 | thickness: 0.2 - 1 |
| --- | --- | --- |
|![image.png](../media/doc360/Images/image%28587%29.png){height="" width="300"}|![image.png](../media/external/cdn.document360.io/image(586).png){height="" width="300"}|![image.png](../media/external/cdn.document360.io/image(585).png){height="" width="300"}|


In collapsed mode, only the widget is visible; in expanded mode, numerical fields appear for precise adjustments.

Double-click the thickness indicator to set the optimal stroke width.

![image](../media/image-doRyf9.png){width="300"}

### Inverted Mode

When working with white strokes, you can enable the Inverted Mode option ![invert-mode](../media/invert-mode.svg). This reverses the usual effect so that the stroke thickness increases for white rather than dark colors.


| default thickness for black strokes | default thickness for white strokes | inverted thickness for white strokes |
| --- | --- | --- |
|![image.png](../media/doc360/Images/image%28592%29.png){height="" width="300"}|![image.png](../media/external/cdn.document360.io/image(593).png){height="" width="300"}|![image.png](../media/external/cdn.document360.io/image(594).png){height="" width="300"}|

Click the expand button ![expand-button](../media/expand-button.svg) to access additional settings.

### Thickness Transition

Within the additional options, you can choose the mode for how gray shades translate to line thickness. Click the control between the thickness value inputs to select your preferred 
transition mode.

![image](../media/image-u7Q4Td.png){width="300"}

The available transition modes are:
 
![thickness-linear](../media/thickness-linear-5Mivar.svg) **Linear** The default linear transition.
![thickness-thick](../media/thickness-thick-nlGQvh.svg) **Thick** An ease-out transition where the line thickens quickly at first, then slows down.
![thickness-thin](../media/thickness-thin.svg) **Thin** An ease-in transition where the line starts thin, then increases rapidly.

*Note:* Switching between these modes does not change the current minimum and maximum thickness values.


| linear | thick | thin |
| --- | --- | --- |
|![image.png](../media/doc360/Images/image%28581%29.png){height="" width="300"}|![image.png](../media/external/cdn.document360.io/image(582).png){height="" width="300"}|![image.png](../media/external/cdn.document360.io/image(583).png){height="" width="300"}|

### Smoothing

Use the thickness smoothing parameter ![thickness-smoothing](../media/thickness-smoothing.svg) to achieve smoother stroke edges. This setting helps create gentle transitions between different thickness values.

| 0 | 5 | 10 |
| --- | --- | --- |
|![image.png](../media/doc360/Images/image%28596%29.png){height="" width="300"}|![image.png](../media/external/cdn.document360.io/image(598).png){height="" width="300"}|![image.png](../media/external/cdn.document360.io/image(599).png){height="" width="300"}|


### Thickness at Line Break Points

The line break setting ![thickness-break-mode](../media/thickness-break-mode-uobQuF.svg) determines how stroke thickness resets at the start of a new line:

**on:** The new line begins with the actual (current) thickness.
**off:** The new line always starts with the minimum thickness.

| on | off |
| --- | --- |
|![image.png](../media/doc360/Images/image%28603%29.png){height="" width="300"}|![image.png](../media/external/cdn.document360.io/image(602).png){height="" width="300"}|

### Auto-thin strokes

When enabled, ![thickness-auto-thin](../media/thickness-auto-thin.svg) this feature detects crowded regions in the drawing and automatically <!--@COP8{-->decreases<!--@COP8}--> stroke thickness to reduce visual density and enhance visual clarity.

| 0 | 0.1 | 0.2 * |
| --- | --- | --- |
|![image](../media/image-qrLdmj.png){width="300"}|![image](../media/image-OP9Z60.png){width="300"}|![image](../media/image-hDWzUb.png){width="300"}|

**Note:* Use the "DASHED LINE" option for a more expressive visual effect.

### Wobble
A subtle hand-drawn **wobble** ![thickness-wobble](../media/thickness-wobble.svg) that adds natural variation to pen-like strokes. Use it to break perfect curves and give lines an organic, sketchbook feel.

| 0% - off | 20% | 50% |
| --- | --- | --- |
|![image](../media/image-RA9rRI.png){width="300"}|![image](../media/image-dwECgF.png){width="300"}|![image](../media/image-1HfuK5.png){width="300"}|



### Rough strokes
High-frequency paper-grain roughness  ![thickness-rough](../media/thickness-rough.svg) that introduces fine texture into strokes. It’s ideal for simulating dry ink, graphite drag, or a lightly abrasive surface.

| 0 - off | 50% | 100% |
| --- | --- | --- |
|![image](../media/image-uBNWDE.png){width="300"}|![image](../media/image-u38M47.png){width="300"}|![image](../media/image-DsabUx.png){width="300"}|
