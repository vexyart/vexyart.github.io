# Filters

# Image Filters Overview

This article describes the available image filters and explains what each one does.

![image](../media/image-8wJJcS.png){width="266"}


## Quick Overview

![effects-brightness](../media/effects-brightness.svg) **Brightness** adjusts the overall lightness of the image.
![effects-contrast](../media/effects-contrast.svg) **Contrast** increases or decreases the difference between dark and light areas.
![invert-mode](../media/invert-mode.svg) **Invert** reverses the image tones, turning light areas dark and dark areas light.
![effects-levels](../media/effects-levels.svg) **Levels** adjusts the tonal range of the image.
![effects-blur](../media/effects-blur.svg) **Blur** softens the image and reduces fine detail.
 ![effects-sharpen](../media/effects-sharpen.svg) **Sharpen** enhances edges and fine details to make the image appear clearer.
 ![effects-shadow-highl](../media/effects-shadow-highl.svg) **Shadows / Highlights** helps recover detail in very dark or very bright areas of the image.
![effects-remove-bkg](../media/effects-remove-bkg.svg) **Remove Background** separates the main subject from the background and removes unwanted surrounding areas.
![effects-color](../media/effects-color.svg) **Color** changes the color intensity and overall color appearance of the image.
![image](../media/image-gdMQkt.png){width="16"} **Gradient** applies a gradual tonal or color transition across the image.

---

## Detailed Description

### Brightness
![image](../media/image-orzGVY.png){width="300"}

The **Brightness** filter changes how light or dark the entire image appears.  
It is useful when the source image is underexposed, too dark, or simply needs better overall visibility.

Increasing ![effects-brightness](../media/effects-brightness.svg) brightness makes the image lighter and can reveal hidden detail in darker areas.  
Decreasing brightness makes the image darker and can help reduce washed-out areas or overly bright regions.

|0| 25 |
|---|---|
|![image](../media/image-nlzN3q.png){width="188"}|![image](../media/image-zYD2fe.png){width="188"}|
|![image](../media/image-0xPbyy.png){width="188"}|![image](../media/image-kl8R6w.png){width="188"}|

---

### Contrast
![image](../media/image-vOLwes.png){width="300"}

The **Contrast** filter controls the difference between the darkest and brightest parts of the image.  
It affects how strong, flat, soft, or vivid the image looks.

Higher ![effects-contrast](../media/effects-contrast.svg) contrast makes shadows darker and highlights brighter, which can improve clarity and visual impact.  
Lower contrast reduces the difference between tones, producing a softer and flatter appearance.

| -50 | 50 |
|---|---|
|![image](../media/image-kemg9t.png){width="189"}|![image](../media/image-JZ10as.png){width="188"}|
|![image](../media/image-4ZqnvS.png){width="188"}|![image](../media/image-sZJVsj.png){width="188"}|

---

### Invert

![image](../media/image-imNmwI.png){width="300"}

The **Invert** filter reverses the tonal values of the image.  
Black becomes white, white becomes black, and intermediate tones are inverted accordingly.

This can be useful for analyzing tonal structure, preparing alternative visual effects, or simplifying work with light objects on dark backgrounds.  
In some workflows, invert mode also makes white fills or bright details easier to inspect and edit.

| off | on |
|---|---|
|![image](../media/image-nlzN3q.png){width="188"}|![image](../media/image-AExLFw.png){width="188"}|
|![image](../media/image-0xPbyy.png){width="188"}|![image](../media/image-FzLALZ.png){width="188"}|

---
### Levels
![image](../media/image-7nxgpz.png){width="300"}

The **Levels** filter adjusts the tonal range of the image by controlling dark tones, midtones, and bright tones.  
It helps improve balance, visibility, and overall contrast.

You can use this filter to make shadows deeper, highlights brighter, or midtones more balanced.  
It is especially useful when the image looks flat, faded, or lacks clear separation between light and dark areas.

Levels is often used for basic tonal correction before applying other filters.  
It gives you more precise control over the image than simple brightness adjustment.

| 0-150 | 40-100 |
|---|---|
|![image](../media/image-VYY2jP.png){width="188"}|![image](../media/image-926I61.png){width="188"}|
|![image](../media/image-hcaeGF.png){width="188"}|![image](../media/image-ZTX053.png){width="188"}|

---

### Blur

![image](../media/image-cIx3jr.png){width="300"}

The **Blur** filter softens the image by reducing edge sharpness and fine detail.  
It creates a smoother and less defined appearance.

This filter is useful for reducing noise, softening harsh transitions, or creating a less distracting background.  
It can also be used as part of an artistic effect or to prepare the image for further processing.

A small amount of ![effects-blur](../media/effects-blur.svg) blur can make the image look smoother, while a stronger blur can significantly reduce detail.  
Because of this, it should be used carefully when edge definition is important.

| 5 | 25 |
|---|---|
|![image](../media/image-ohZgjH.png){width="188"}|![image](../media/image-FRDxtS.png){width="188"}|
|![image](../media/image-VTlee3.png){width="188"}|![image](../media/image-xQ6Vgl.png){width="188"}|

---

### Sharpen

![image](../media/image-yjDgBp.png){width="300"}

The **Sharpen** filter enhances edges and local contrast to make the image look more defined.  
It increases the visibility of small details and can improve the perception of focus.

This is helpful when an image looks slightly soft or blurred.  
The  ![effects-sharpen](../media/effects-sharpen.svg) Amount setting controls the sharpening strength, while ![effects-blur-radius](../media/effects-blur-radius.svg) Radius defines the size of the affected area.

| 50-10 | 250-20 |
|---|---|
|![image](../media/image-cSuUQO.png){width="188"}|![image](../media/image-FHmvJa.png){width="188"}|
|![image](../media/image-IQYmZc.png){width="188"}|![image](../media/image-0hyfNa.png){width="188"}|


---

### Shadows / Highlights

![image](../media/image-thfvGe.png){width="300"}

The **Shadows / Highlights** filter adjusts dark and bright regions separately.  
Its main purpose is to recover detail that may be hidden in deep shadows or strong highlights.

![effects-shadow-highl-h](../media/effects-shadow-highl-h.svg) Brightening shadows can reveal information in dark parts of the image without affecting the rest too much.  
![effects-shadow-highl-r](../media/effects-shadow-highl-r.svg) Reducing highlights can restore visibility in overexposed or very bright areas.

| 100-0 | 250-20 |
|---|---|
|![image](../media/image-8E1QH3.png){width="188"}|![image](../media/image-aRBz79.png){width="188"}|
|![image](../media/image-q1ARZa.png){width="188"}|![image](../media/image-09IkE7.png){width="188"}|


---

### Remove Background

The **Remove Background** filter isolates the main subject and removes or suppresses the background.  
This helps focus attention on the important object in the image.

It is useful for product images, object extraction, design workflows, and compositions where the background is distracting or unnecessary.  
Depending on the image, this filter may work best when the subject is clearly separated from its surroundings.

| 25 | 100 |
|---|---|
|![image](../media/image-vrcxic.png){width="188"}|![image](../media/image-4jM5jg.png){width="188"}|
|![image](../media/image-ZL3QwO.png){width="188"}|![image](../media/image-i8agh2.png){width="188"}|

---

### Color

![image](../media/image-vdN2IN.png){width="300"}

The **Color** filter adjusts the target color used for image processing.  
You can define it by choosing a color from ![effects-color](../media/effects-color-RPNVpm.svg) the palette or by sampling it directly from the image with  ![effects-color-dropper](../media/effects-color-dropper-70oPut.svg)  the eyedropper tool.

![effects-color-diameter](../media/effects-color-diameter.svg) The Diameter setting controls the size of the sampled area.  
A larger diameter averages a wider region, while a smaller one gives a more precise color sample.

|![image](../media/image-Hl1cTC.png){width="16"}|![image](../media/image-vAgXbF.png){width="16"}|
|---|---|
|![image](../media/image-ftbSX8.png){width="188"}|![image](../media/image-e8vTMD.png){width="188"}|
|![image](../media/image-szBZmz.png){width="188"}|![image](../media/image-PpQL8N.png){width="188"}|


---

### Gradient

![image](../media/image-BFg3SC.png){width="300"}

The **Gradient** filter applies a smooth tonal or color transition across the image.  
It can be used to create depth, emphasis, stylized shading, or controlled visual blending.

A gradient may be used to brighten one side of the image, darken another, or introduce a gradual transition between two tones or colors.  
The value setting controls ![effects-gradient-param](../media/effects-gradient-param.svg) the strength of the transition, affecting how strongly the gradient blends into the image.

|![image](../media/image-35JjTI.png){width="16"}|![image](../media/image-AWaavL.png){width="16"}|
|---|---|
|![image](../media/image-e2sGwU.png){width="188"}|![image](../media/image-X7lNCW.png){width="188"}|
![image](../media/image-Oh8N5m.png){width="188"}|![image](../media/image-cVp85r.png){width="188"}|

---

## Summary

These filters can be used individually or combined to improve image quality, correct tonal balance, enhance details, simplify editing, or create specific visual effects.  
A common workflow is to start with **Brightness** and **Contrast**, refine the image with **Shadows / Highlights** and **Sharpen**, and then apply **Color**, **Gradient**, or **Remove Background** depending on the final goal.