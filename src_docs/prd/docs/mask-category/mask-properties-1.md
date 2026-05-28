## Smooth Mask

When activated, this mode enhances the mask with added transparency and softens the edges for a smoother appearance.

![image.png](../media/doc360/Images/image%28645%29.png){width="300"}

You can find this property and its settings in the "Smooth Mask" properties panel. For a detailed guide on how to use this feature, refer to the [Smooth Mask](/v1/docs/smooth-mask-1) article.


When this mode is activated, masking gains additional transparency and edge blurring properties.


![image.png](../media/doc360/Images/image%28645%29.png){width="300"}


>This masking mode is based on raster masks. By default, this mode is turned off, and the vector masking mode is used, which provides a more precise result.


### Opacity


![Opacity](../media/doc360/Images/smooth-mask-opacity.svg) The **Opacity** property determines the degree of transparency of the mask in relation to other layers beneath it.

| top layer opacity: 100% | top layer opacity: 50% | top layer opacity 50%,  visibility off |
| --- | --- | --- |
|![image.png](../media/doc360/Images/image%28646%29.png){width="300"}|![image.png](../media/external/cdn.document360.io/image(647).png){width="300"}|![image.png](../media/external/cdn.document360.io/image(648).png){width="300"}|


### Feather


![Feather radius](../media/doc360/Images/smooth-mask-feather.svg) The **Feather radius** property determines the degree of blurriness of the mask's edge.

| radius: 0 | radius: 10 | radius: 25 |
| --- | --- | --- |
|![image.png](../media/doc360/Images/image%28650%29.png){width="300"}|![image.png](../media/external/cdn.document360.io/image(651).png){width="300"}|![image.png](../media/external/cdn.document360.io/image(652).png){width="300"}|

## Modify
The **Modify** section provides tools to adjust your mask's shape and appearance after creation. These tools help you refine your mask without starting over, giving you more control over your artwork.

### Expand or Contract
Make your entire mask larger or smaller:
- Grow the mask outward (positive values)
- Shrink the mask inward (negative values)
- Fine-tune the mask's coverage

### Edge to Stroke
Transform your mask's edge into a thick stroke:
- Convert the boundary into a stroke
- Adjust the stroke width as needed
- Create interesting outline effects