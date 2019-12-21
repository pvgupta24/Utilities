#!/bin/bash
#title           :reboot.sh
#description     :Script to reboot to desired OS in case of dual boot etc. Useful if you forget to select the option after reboot :P
#author		 :pvgupta24
#usage		 :sudo bash ./reboot.sh
#notes           :Requires sudo priveleges
#==============================================================================

# Get menu entry with Windows title
GRUB_MENU_ENTRY=`grep -i "^menuentry 'Windows" /boot/grub/grub.cfg|head -n 1|cut -d"'" -f2`

# Set grub option to the menu entry and reboot
grub-reboot "$GRUB_MENU_ENTRY"
reboot
