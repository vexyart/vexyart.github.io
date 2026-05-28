These options allow you to control the dashed pattern of your fill lines.


![image.png](../media/doc360/Images/image%28607%29.png){height="" width="300"}


> Note: This setting is not applicable to Text, Trace, and Halftone fills.


### Threshold


The threshold determines when a fill line becomes dotted based on the halftone values in your image. When the halftone exceeds the threshold, the line turns dotted. By default, areas lighter than the threshold show dotted lines, and at a threshold of 255 the dotted effect is disabled. Adjust this value using the slider or input field.
Alternatively, double-click the indicator to automatically set the optimal threshold value.

![image](../media/image-1wmbCb.png){width="300"}




| threshold: 130 | threshold: 50 | threshold: 0 |
| --- | --- | --- |
| ![image.png](../media/doc360/Images/image%28609%29.png){height="" width="300"} | ![image.png](../media/external/cdn.document360.io/image(613).png){height="" width="300"} | ![image.png](../media/external/cdn.document360.io/image(611).png){height="" width="300"} |

### Additional Options

Access additional dash settings by clicking the expand icon on the panel header. This section lets you fine-tune the dash and gap lengths.

It includes:

![dash-length.svg](../media/doc360/Images/dash-length.svg) Minimum and maximum dash length.
![gap-length.svg](../media/doc360/Images/gap-length.svg) Minimum and maximum gap length.


By default, the longest dash appears at the darkest gray, and the shortest dash at the lightest. Similarly, the smallest gap is on the darkest part, and the largest gap on the lightest.


| dash: 0.1→2 gap: 1→2 | dash: 0.1→0.2 gap: 1→2 | dash: 0.1→1.5 gap: 0.2→2 |
| --- | --- | --- |
| ![image.png](../media/doc360/Images/image%28614%29.png){height="" width="300"} | ![image.png](../media/external/cdn.document360.io/image(616).png){height="" width="300"} | ![image.png](../media/external/cdn.document360.io/image(617).png){height="" width="300"} |

### Inverted Mode

![image](../media/image-a3VCCq.png){width="300"}

In Inverted Mode the dashed line is built from the threshold value down to pure black (zero). In this mode, the shortest dash appears on the darkest part of the image, while the longest dash appears on the lightest. Similarly, the gaps reverse—the smallest gap is on the lightest area, and the largest on the darkest. This setup is ideal for white stroke applications.


| dash: 0.1→2 gap: 1→2 | dash: 0.1→0.2 gap: 1→2 | dash: 0.1→1.5 gap: 0.2→2 |
| --- | --- | --- |
| ![image.png](../media/doc360/Images/image%28621%29.png){height="" width="300"} | ![image.png](../media/external/cdn.document360.io/image(619).png){height="" width="300"} | ![image.png](../media/external/cdn.document360.io/image(618).png){height="" width="300"} |

### Dash by <!--@OE33{-->Thickness<!--@OE33}-->

![image](../media/image-EAyLJW.png){width="300"}

Controls dash generation based on local stroke thickness. Thinner parts of the stroke are converted into dashed segments, which is especially useful when combined with Gap control.

| off | on |
| --- | --- |
|![image](../media/image-jDWEgC.png){width="300"}|![image](../media/image-LHFaAn.png){width="300"}|
