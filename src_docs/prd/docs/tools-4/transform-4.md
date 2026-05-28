![Transform tool](../media/doc360/Images/tool-transform%282%29.svg) The **Transform** tool provides operations for manipulating selected objects, including move, rotate, resize, and skew.

### Activating the Transform Tool
Click the **Transform** tool icon in the toolbar or use **Tools -> Transform** in the main menu.

![image.png](../media/doc360/Images/image-7ZMJZHRU.png){width="396"}

Tool shortcut: {*⌘T*}/{*⌃T*}

Upon activation, a bounding box appears around selected objects, indicating they're ready for transformation.
| layer selected | curve selected |
| --- | --- |
|![image.png](../media/doc360/Images/image%28434%29.png){width="300"}|![image.png](../media/external/cdn.document360.io/image(435).png){width="300"}|

### Selection
Use the **Editor** tool or the Layers panel to select objects for transformation. When a layer is chosen, transformations affect its masks and all curves within Handmade fills. However, specific fill attributes, like interval or circle center, remain unchanged. For instance, moving a layer with a Spiral fill keeps the spiral's center fixed. Similarly, resizing a plane with a Linear fill won't alter line intervals.
| selected | resized |
| --- | --- |
|![image.png](../media/doc360/Images/image%28436%29.png){width="300"}|![image.png](../media/external/cdn.document360.io/image(438).png){width="300"}|


### Moving 
Drag the objects to your desired location. Confirm the move with the {*⏎*} key or continue with other editing tasks.

| mouse button press | drag | mouse button release and press enter |
| --- | --- | --- |
|![image.png](../media/doc360/Images/image%28439%29.png){width="300"}|![image.png](../media/external/cdn.document360.io/image(440).png){width="300"}|![image.png](../media/external/cdn.document360.io/image(441).png){width="300"}|


### Resizing
Use the handlers around the transformation frame to resize objects. For horizontal or vertical resizing, use the handlers on the frame's edges. For proportional resizing, use the corner handlers.

| horizontal | vertical | both |
| --- | --- | --- |
|![image.png](../media/doc360/Images/image%28442%29.png){width="300"}|![image.png](../media/external/cdn.document360.io/image(443).png){width="300"}|![image.png](../media/external/cdn.document360.io/image(445).png){width="300"}|

Hold the {*⇧*} key while resizing to preserve the object's proportions.

| selected | resize with {*⇧*} pressed |
| --- | --- |
|![image.png](../media/doc360/Images/image%28448%29.png){width="300"}|![image.png](../media/external/cdn.document360.io/image(447).png){width="300"}|

Hold the {*⌥*} key while resizing to adjust proportions based on the symmetry point. You can reposition the symmetry point with the mouse.

|resize {*⌥*} pressed | center of symmetry point changed |
| --- | --- |
|![image.png](../media/doc360/Images/image%28449%29.png){width="300"}|![image.png](../media/external/cdn.document360.io/image(450).png){width="300"}|

### Skewing
Hold the {*⌘*}/{*⌃*} key and drag the transformation frame handlers to skew objects. For symmetrical skewing, also press the {*⌥*} key to adjust opposite handlers together.

| drag with {*⌘*}/{*⌃*} pressed | drag with {*⌘⌥*}/{*⌃v*} pressed |
| --- | --- |
|![image.png](../media/doc360/Images/image%28451%29.png){width="300"}|![image.png](../media/external/cdn.document360.io/image(452).png){width="300"}|

### Rotating
Hover near a handler until the rotation cursor appears. Click and drag to rotate the object around its symmetry center. Hold the {*⌃*} key for 15° increment rotation.

| selected | rotated |
| --- | --- |
|![image.png](../media/doc360/Images/image%28453%29.png){width="300"}|![image.png](../media/external/cdn.document360.io/image(455).png){width="300"}|

### Confirming or Reverting Changes
Press the {*⏎*} key or click outside the transformation frame to apply changes. Press the {*Esc*} key to revert to the original state.
