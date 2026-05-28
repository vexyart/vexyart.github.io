
The **OVERLAP CONTROL** section gives you powerful tools to create complex interactions between your fills. By controlling how fills intersect and cut through each other, you can achieve sophisticated artistic effects with precise control.

![image.png](../media/doc360/Images/image%28691%29.png){width="400"}

> **Compatibility Note:** This feature works only with fills based on lines or curves. Text, Halftone, Trace, Wireframe, Fractals, and Scribble fills cannot use overlap controls.


$~$

### Core Properties

Every fill can have two fundamental overlap properties:
![image.png](../media/doc360/Images/image%28690%29.png){width="300"}


![cut other fills](../media/doc360/Images/overlap-scissors.svg) **Cutting Property:** Enables this fill to cut through other fills beneath it (if those fills have their "cuttable" property enabled).



![cut by another fill](../media/doc360/Images/overlap-cuttable.svg) **Cuttable Property:** Allows this fill to be cut by other fills positioned above it (if those fills have their "cutting" property enabled).



### How Overlap Works: A Visual Example

![image.png](../media/doc360/Images/image%28692%29.png){width="400"}

In this demonstration:

1. The **red linear fill** has cutting enabled:

   ![image.png](../media/doc360/Images/image%28693%29.png){width="200"}

2. The **black linear fill** has cuttable enabled:

   ![image.png](../media/doc360/Images/image%28694%29.png){width="200"}

3. We add a **blue linear fill** (parallel to the black one with 50% offset) and configure it as follows:
   - Enable cutting property on the blue fill
   - Enable cuttable property on the red fill (giving the red fill both properties)

   ![image.png](../media/doc360/Images/image%28696%29.png){width="200"}

4. **Final result:** The blue fill cuts through the red one, while the red one cuts through the black one:

   ![image.png](../media/doc360/Images/image%28698%29.png){width="400"}


**Try it yourself:** Download this example [here](https://i.vexy.art/vl/examples/UM3-Overlap-Control-1.lines).

### Advanced Options

Each overlap property offers additional customization options for precise control.

### Scope

![Options](../media/doc360/Images/overlap-scissors.svg) **Cutting scope:** Define how far the cutting effect reaches:

![image.png](../media/doc360/Images/image%28703%29.png){width="300"}


- **Layer:** Restricts cutting to affect only fills within the same layer
- **Document:** Extends cutting to affect all compatible fills throughout the entire document

$~$

### Dash and Gap

![Options](../media/doc360/Images/overlap-cuttable.svg) **Dash and Gap:** Control how segments appear between cut points:

![image.png](../media/doc360/Images/image%28702%29.png){width="300"}


- **Dash:** Controls the length of visible line segments between cut points
- **Gap:** Controls the length of empty spaces between dash segments

Visual examples of different dash and gap combinations:

| Dash: 40, Gap: 80 | Dash: 13, Gap: 95 | Dash: 80, Gap: 55 |
| --- | --- | --- |
|![image.png](../media/doc360/Images/image%28710%29.png){width="300"}|![image.png](../media/external/cdn.document360.io/image(711).png){width="300"}|![image.png](../media/external/cdn.document360.io/image(713).png){width="300"}|


### Stroke Orientation

**Orientation** determines how dash segments are rotated between cut points, offering various artistic possibilities:


![image.png](../media/doc360/Images/image%28704%29.png){width="104"}


- **Normal:** Keeps dashes aligned to the original fill line's direction
- **Auto:** Automatically orients dashes along the longest diagonal path
- **Diagonal A:** Forces dashes to align with the first diagonal path
- **Diagonal B:** Forces dashes to align with the second diagonal path

Visual comparison of orientation options:

| Normal | Auto | Diagonal A | Diagonal B|
| --- | --- | --- | --- |
|![image.png](../media/doc360/Images/image%28705%29.png){width="300"}|![image.png](../media/external/cdn.document360.io/image(706).png){width="300"}|![image.png](../media/external/cdn.document360.io/image(707).png){width="300"}|![image.png](../media/external/cdn.document360.io/image(708).png){width="300"}|

Here's our example with diagonal orientation applied:

![image.png](../media/doc360/Images/image%28709%29.png){width="400"}



**Try it yourself:** Download this example [here](https://i.vexy.art/vl/examples/UM3-Overlap-Control-2.lines).

### Synchronizing with Dashed Lines


The **Threshold** property in the [DASHED LINE](vb://article/dashed-line-1) panel can be used to coordinate cuts with regular dashed lines. This allows you to create consistent patterns throughout your artwork.

![image.png](../media/doc360/Images/image%28714%29.png){width="300"}

By enabling the dashed line option on your cutting fill and setting similar threshold values across all fills, you can achieve harmonized patterns like this:

![image.png](../media/doc360/Images/image%28721%29.png){width="400"}



**Try it yourself:** Download this example [here](https://i.vexy.art/vl/examples/UM3-Overlap-Control-3.lines).

### Quick Controls in the Layers Panel


For efficient workflow, the LAYERS panel includes quick access to overlap controls:

![image.png](../media/doc360/Images/image%28716%29.png){width="300"}

- **Global cutting** is indicated by a horizontal line to the left of the scissors icon:

  ![image.png](../media/doc360/Images/image%28718%29.png){width="300"}

- **Local cutting** is indicated by a vertical line above the scissors icon:

  ![image.png](../media/doc360/Images/image%28719%29.png){width="300"}

- If a fill has both cutting and cuttable properties enabled, a combined icon appears.

You can toggle these properties directly by clicking the icon or the lightly highlighted area that indicates available but inactive properties.



### Example File

For a comprehensive demonstration of all these techniques, download the example file: [UM3-Overlap-Control-4.lines](https://i.vexy.art/vl/examples/UM3-Overlap-Control-4.lines).
