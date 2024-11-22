import pyautogui
for i in range(50):
    pyautogui.typewrite("HI {}".format(i))
    pyautogui.press("Enter")