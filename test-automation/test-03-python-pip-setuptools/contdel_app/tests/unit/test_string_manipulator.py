import unittest
from src.msd_module.string_manipulator import reverse_string

class TestStringManipulator(unittest.TestCase):

    def test_reverse_string(self):
        self.assertEqual(reverse_string("hello"), "olleh")
