
      const contentItems = document.querySelectorAll(".content-item");
      const navigationItems = document.querySelectorAll(".navigation-item");

      let activeIndex = 0;
      function switchContent(indexToBeActivated) {
        contentItems[activeIndex].removeAttribute("data-is-active");
        contentItems[indexToBeActivated].setAttribute("data-is-active", "");

        /* also add the attribute to the navigation item */
        navigationItems[activeIndex].removeAttribute("data-is-active");
        navigationItems[indexToBeActivated].setAttribute("data-is-active", "");

        activeIndex = indexToBeActivated;
      }

      switchContent(0);

      navigationItems.forEach((navigationItem, index) => {
        navigationItem.addEventListener("click", () => {
          switchContent(index);
        });
      });


