---
id: making_a_pull_request
title: Making a Pull Request
sidebar_label: Making a Pull Request
---

## General
- Every branches should be required a Pull Request by applying branch protection. The best practices are required 2 members approval so that the change is good to merge.
- Add all of your team members as reviewers.
- Create revertible Pull Request, and try to keep them small.
- Prefix each commit message with the ticket number, and make sure the commit messages are complete and the functional of commit is small.
- Fill out the Pull Request as described down below.
- Make sure to attach a screenshot or result of successful local unit test run if you modify the source code


## Subject of Pull Request
The Pull Request subject should be in the format `[ticket-id] - summary of the ticket`

For example:

>[SWATANG-01] - add login feature


## Detail information of Pull Request
Below section is optional, but it is encouraged to share when you make a Pull Request.

### Description
Provide a few sentences describing the overall goals of the Pull Request's commits. The important is linking to the ticket you are working on so that reviewer is able to look more detail information in the ticket.

### Approach
If there are some options/solutions to solve the problems mentioned in the tickets, this is a good place to put detail of each options and how you address to solve problems. 

#### Problem with the current code:
- Point of problem 1
- Point of problem 2

#### Fix:
- Fix point 1
- Fix point 2


### Learning
Some tickets requires a lot of effort to research so we could add a research note markdown file to the [docs](docs) to describe research stage and link the research note to here.


### Related PRs
List out the related PRs against other branches.

Repo | Branch | PR #
------ | ------ | ------
SWATANG | master | [PR #](link-to-the-PR)
SWATANG | logging | [PR #](link-to-the-PR)
SWATANG | docs | [PR #](link-to-the-PR)


### Check the box when resolved these items and provide more information

- [x] Documentation
- [ ] Localization
- [ ] Coding
- [ ] Unit Tests
- [ ] Integration Tests
- [ ] System Tests

---
Made with ♥ by [Tam Pham](https://logigear.facebook.com/profile.php?id=100021932891755)

---
