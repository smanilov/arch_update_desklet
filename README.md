# Cinnamon desklet for semi-automating Arch updates.

I've been running Arch Linux for a couple of years now. This repository is a fun
project to automate to a large extent the system-update work that I perform on a
regular basis. The goal is to make it easier to perform updates with the hope
that it will lead to more regular updates of my system (at every boot?). A
secondary goal is to make it easier to track system evolution.

Insall by cloning the repository into
`~/.local/share/cinnamon/desklets/arch_update@smanilov`.

## The Process

The steps that I perform as part of an update are the following:

1. Create an update protocol from a template
2. Generate and save package lists
3. Check the news on archlinux.org
4. Issue a system update, if there's nothing unusual
5. Record the # of updated packages, dowload size, install size, and diff
6. Restart the system if needed

The desklet simplifies the process by turning it into a dialog system:

1. Last update on YYYY.MM.DD. Do you want to update? [y/n]
2. (Performs process steps until 3.): There are 3 news on archlinux.org(link)
   since last update. Continue with update? [y/n]
3. (Performs update and records data.): These 2 packages might require a restart: ... Restart system? [y/n]
4. System up to date.
