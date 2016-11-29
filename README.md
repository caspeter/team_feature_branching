# Team Feature Branching

You will have to communicate a lot to do this well!

Working with a group of about 4 people:
  * Have one team member create a gitHub repository
  * Add the other team members as Collaborators - Settings > Collaborators
  * All team members should clone the repo

## Stories

The tasks described must be done in the feature branches and not all in one branch.

Perform the following tasks:
  * In the feature-branch `simple-server` create a simple server with the static directory called public
  * In the feature-branch `member-names` create an index.html file in the public folder of the simple server. The index page should include a title with the name of your group and an ordered list of your team member names
  * In the feature-branch `styles` create a css file that includes styling for the index page (font face, font size, font color, background color, etc.)
  * In the feature-branch `add-links` add links to the team member github pages
  * In the feature-branch `api-route` add a new route to your server that responds to a GET request for /api.
  * If you still have time, experiment with creating more branches and following this workflow.


## Workflow

Your workflow should be:

  * `git pull origin master`
  * `git checkout branch-name`
  * When on the branch follow your typical workflow of add,commit,push
  * Pull from master fairly frequently to get any new changes that have been added there. Resolve conflicts.
  * When your feature is complete do a final pull from master and resolve any conflicts. All conflicts should be resolved on the feature branch, *not on master*.
  * `git push origin branch-name`
  * On gitHub, submit a pull request
  * Team members should review and comment on your pull request. Once everything has been approved, and you see the message __This branch has no conflicts with the base branch__ click the green __Merge pull request__ button. This will add your feature branch changes to master.
  * Part of your team workflow has been to frequently pull from master but it is still worthwhile to let your team members know when a feature branch has been approved and is now in master so they can pull the latest changes into their own feature branch.
