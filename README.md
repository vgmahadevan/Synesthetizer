# Synesthetizer

This is the code supporting an add-on for Google Docs. When run, it generates a sidebar at the right of the screen where the user can select a color for each letter. 

![image](https://github.com/vgmahadevan/Synesthetizer/assets/99775685/0eefe515-0c10-4fb6-ae13-6b7493e7fa01)

At the bottom of the sidebar, there is a "Synesthetize!" button and a checkbox. 

![image](https://github.com/vgmahadevan/Synesthetizer/assets/99775685/32e1e76f-9c27-4428-9569-535555f45415)

If the "Synesthetize!" button is clicked when the checkbox is not checked, then the add-on will color every letter in the document with the color that the user assigned it in the sidebar, like so:

![image](https://github.com/vgmahadevan/Synesthetizer/assets/99775685/26518888-eb95-4407-9f71-37c6d59e631f)

If the "Synesthetize!" button is clicked when the checkbox is checked, then the add-on will color every word in the document with the color that the user assigned it to the first letter in the sidebar, like so:

![image](https://github.com/vgmahadevan/Synesthetizer/assets/99775685/579b9780-da6f-4cff-aad1-4f05c09353a3)

The lighter shade that appears after the first letter is calculated such that the hue doesn't change but the color is lighter.
