import unittest
from src.msd_module.sentence_service import reverse_sentence

class TestSentenceService(unittest.TestCase):

    def test_reverse_sentence(self):
        self.assertEqual(reverse_sentence("hello world"), "olleh dlrow")
